import type CartTableRowProps from './CartTableRowProps';
import CartTableColumn from '../CartTableColumn';
import { formatPrice } from '../../utils';
import CartRemoveItemButton from '../CartRemoveItemButton';

const CartTableRow = ({ item }: CartTableRowProps) => (
  <li className="grid grid-cols-1 lg:grid-cols-[1fr,1fr,1fr,1fr,2.5rem]">
    <h3 className="py-2.5 text-sm border-b lg:border-none">
      {item.product.title}
    </h3>
    <CartTableColumn title="Price" content={formatPrice(item.product.price)} />
    <CartTableColumn title="Quantity">
      <div className="text-sm">{item.quantity}</div>
    </CartTableColumn>
    <CartTableColumn
      title="Subtotal"
      content={formatPrice(item.product.price * item.quantity)}
    />
    <CartTableColumn title="Remove">
      <CartRemoveItemButton />
    </CartTableColumn>
  </li>
);

export default CartTableRow;
