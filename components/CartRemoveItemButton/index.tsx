import { IoTrashOutline } from 'react-icons/io5';

const CartRemoveItemButton = () => (
  <button
    className="absolute top-0 bottom-0 text-red-600 lg:static -right-2 icon-button"
    type="button"
  >
    <IoTrashOutline size={20} />
  </button>
);

export default CartRemoveItemButton;
