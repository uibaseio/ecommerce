import { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { addDoc, collection, getDoc, doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import type CartProviderProps from './CartProviderProps';
import type { Cart, Product, CartItem } from '../../types';
import { firestore } from '../../lib/firebase';
import { CartContext } from '../../contexts';

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartId, setCartId] = useLocalStorageState('cartId', '');
  const [cartRef, setCartRef] = useState<DocumentReference<DocumentData>>();

  useEffect(() => {
    if (cartId) setCartRef(doc(firestore, 'carts', cartId));
  }, [cartId]);

  const [value] = useDocumentData(cartRef);
  const cart = value as Cart;
  const items = cart?.items || [];

  const handleAddToCart = async (product: Product) => {
    if (!cartId) {
      const newCartRef = await addDoc(collection(firestore, 'carts'), {
        items: [
          {
            product,
            quantity: 1,
          },
        ],
      });

      const cartSnap = await getDoc(newCartRef);

      setCartId(cartSnap.id);

      toast.success(`Added ${product.title} to cart`);
    } else {
      const cartIncludesItem = items
        .map((item) => item.product.id)
        .includes(product.id);

      if (cartIncludesItem) {
        const newItems = [...items];
        const itemIndex = newItems.findIndex(
          (newItem) => newItem.product.id === product.id
        );

        newItems[itemIndex].quantity = newItems[itemIndex].quantity + 1;

        await setDoc(doc(firestore, 'carts', cartId), {
          items: newItems,
        });

        toast.success(`Added ${product.title} to cart`);
      } else {
        await setDoc(doc(firestore, 'carts', cartId), {
          items: [
            ...items,
            {
              product,
              quantity: 1,
            },
          ],
        });

        toast.success(`Added ${product.title} to cart`);
      }
    }
  };

  const quantity = items
    .map((item) => item.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const handleRemoveItem = async (item: CartItem) => {
    const newItems = [...items].filter(
      (newItem) => newItem.product.id !== item.product.id
    );

    await setDoc(doc(firestore, 'carts', cartId), {
      items: newItems,
    });

    toast.success(`Removed ${item.product.title} from cart`);
  };

  const handleDecrementItemQuantity = async (
    item: CartItem,
    callback: (quantity: number) => void
  ) => {
    if (item.quantity === 1) return handleRemoveItem(item);

    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (newItem) => newItem.product.id === item.product.id
    );
    const newQuantity = newItems[itemIndex].quantity - 1;

    newItems[itemIndex].quantity = newQuantity;

    await setDoc(doc(firestore, 'carts', cartId), {
      items: newItems,
    });

    callback(newQuantity);
  };

  const handleUpdateItemQuantity = async (item: CartItem, quantity: number) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (newItem) => newItem.product.id === item.product.id
    );

    newItems[itemIndex].quantity = newItems[itemIndex].quantity = quantity;

    await setDoc(doc(firestore, 'carts', cartId), {
      items: newItems,
    });
  };

  const handleIncrementItemQuantity = async (
    item: CartItem,
    callback: (quantity: number) => void
  ) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (newItem) => newItem.product.id === item.product.id
    );
    const newQuantity = newItems[itemIndex].quantity + 1;

    newItems[itemIndex].quantity = newQuantity;

    await setDoc(doc(firestore, 'carts', cartId), {
      items: newItems,
    });

    callback(newQuantity);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        handleAddToCart,
        quantity,
        handleRemoveItem,
        handleDecrementItemQuantity,
        handleUpdateItemQuantity,
        handleIncrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
