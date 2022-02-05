import { useCart } from '../../hooks';
import CartTableHeader from '../CartTableHeader';
import CartTableBody from '../CartTableBody';

const CartTable = () => {
  const { items } = useCart();

  if (items.length === 0)
    return <p className="text-gray-500">Your cart is empty</p>;

  return (
    <div>
      <CartTableHeader />
      <CartTableBody items={items} />
    </div>
  );
};

export default CartTable;
