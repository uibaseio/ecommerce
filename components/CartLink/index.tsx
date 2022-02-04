import Link from 'next/link';
import { IoBagOutline } from 'react-icons/io5';

const CartLink = () => (
  <Link href="/cart">
    <a className="relative -right-2 icon-button" aria-label="Cart">
      <IoBagOutline size={20} />
    </a>
  </Link>
);

export default CartLink;
