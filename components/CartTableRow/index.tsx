import type CartTableRowProps from './CartTableRowProps';
import CartTableColumn from '../CartTableColumn';
import { formatPrice } from '../../utils';
import CartItemQuantitySelector from '../CartItemQuantitySelector';
import CartRemoveItemButton from '../CartRemoveItemButton';

const CartTableRow = ({ item }: CartTableRowProps) => (
  <li className="grid grid-cols-1 lg:grid-cols-[1fr,1fr,1fr,1fr,2.5rem] lg:py-2">
    <h3 className="py-2 border-b lg:py-2.5 lg:text-sm lg:border-none">
      {item.product.title}
    </h3>
    <CartTableColumn title="Price" content={formatPrice(item.product.price)} />
    <CartTableColumn title="Quantity">
      <CartItemQuantitySelector item={item} />
    </CartTableColumn>
    <CartTableColumn
      title="Subtotal"
      content={formatPrice(item.product.price * item.quantity)}
    />
    <CartTableColumn title="Remove">
      <CartRemoveItemButton item={item} />
    </CartTableColumn>
  </li>
);

export default CartTableRow;
