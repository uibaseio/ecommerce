import type CartTableBodyProps from './CartTableBodyProps';
import CartTableRow from '../CartTableRow';

const CartTableBody = ({ items }: CartTableBodyProps) => (
  <ul>
    {items.map((item) => (
      <CartTableRow item={item} key={item.product.id} />
    ))}
  </ul>
);

export default CartTableBody;
