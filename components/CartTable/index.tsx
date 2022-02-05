import { useCart } from '../../hooks';
import CartTableHeader from '../CartTableHeader';
import CartTableBody from '../CartTableBody';

const CartTable = () => {
  const { items } = useCart();

  return (
    <div>
      <CartTableHeader />
      <CartTableBody />
    </div>
  );
};

export default CartTable;
