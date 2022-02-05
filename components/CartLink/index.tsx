import Link from 'next/link';
import { IoBagOutline } from 'react-icons/io5';
import { useCart } from '../../hooks';

const CartLink = () => {
  const { quantity } = useCart();

  return (
    <Link href="/cart">
      <a className="relative -right-2 icon-button" aria-label="Cart">
        <IoBagOutline size={20} />
        {quantity > 0 && (
          <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white rounded-full -top-1 -right-1 bg-primary-600">
            {quantity}
          </div>
        )}
      </a>
    </Link>
  );
};

export default CartLink;
