import Image from 'next/image';
import { parseCookies, setCookie } from 'nookies';
import { addDoc, collection, getDoc, doc, setDoc } from 'firebase/firestore';
import type ProductListItemProps from './ProductListItemProps';
import { firestore } from '../../lib/firebase';
import type { Cart } from '../../types';
import { formatPrice } from '../../utils';
import Button from '../Button';

const ProductListItem = ({ product }: ProductListItemProps) => {
  const handleAddToCart = async () => {
    const { cartId } = parseCookies();

    if (!cartId) {
      const cartRef = await addDoc(collection(firestore, 'carts'), {
        items: [
          {
            product,
            quantity: 1,
          },
        ],
      });

      const cartSnap = await getDoc(cartRef);

      setCookie(null, 'cartId', cartSnap.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } else {
      const cartRef = doc(firestore, 'carts', cartId);
      const cartSnap = await getDoc(cartRef);
      const cart = cartSnap.data() as Cart;
      const { items } = cart;
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
      } else
        await setDoc(doc(firestore, 'carts', cartId), {
          items: [
            ...items,
            {
              product,
              quantity: 1,
            },
          ],
        });
    }
  };

  return (
    <li className="p-4 space-y-4 border rounded-lg">
      <div className="relative w-full h-32">
        <Image
          src={product.thumbnails[0].src}
          alt={product.thumbnails[0].alt}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
      </div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </li>
  );
};

export default ProductListItem;
