import { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { addDoc, collection, getDoc, doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import type CartProviderProps from './CartProviderProps';
import type { Cart, Product } from '../../types';
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

  return (
    <CartContext.Provider
      value={{
        items,
        handleAddToCart,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
