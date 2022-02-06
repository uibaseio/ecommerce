import { useCart } from '../../hooks';
import CartTableHeader from '../CartTableHeader';
import CartTableBody from '../CartTableBody';
import CartTableFooter from '../CartTableFooter';

const CartTable = () => {
  const { loading, items } = useCart();

  if (loading) return null;

  if (items.length === 0)
    return <p className="text-gray-500">Your cart is empty</p>;

  return (
    <div>
      <CartTableHeader />
      <CartTableBody items={items} />
      <CartTableFooter />
    </div>
  );
};

export default CartTable;
