import { IoTrashOutline } from 'react-icons/io5';
import type CartRemoveItemButtonProps from './CartRemoveItemButtonProps';
import { useCart } from '../../hooks';

const CartRemoveItemButton = ({ item }: CartRemoveItemButtonProps) => {
  const { handleRemoveItem } = useCart();

  return (
    <button
      className="absolute top-0 bottom-0 right-0 text-red-600 icon-button"
      type="button"
      onClick={() => handleRemoveItem(item)}
      aria-label={`Remove ${item.product.title} from cart`}
    >
      <IoTrashOutline size={20} />
    </button>
  );
};

export default CartRemoveItemButton;
