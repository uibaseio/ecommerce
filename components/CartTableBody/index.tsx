import { useCart } from '../../hooks';
import CartTableRow from '../CartTableRow';

const CartTableBody = () => {
  const { items } = useCart();

  return (
    <ul>
      {items.map((item) => (
        <CartTableRow item={item} key={item.product.id} />
      ))}
    </ul>
  );
};

export default CartTableBody;
