import type CartTableHeaderColumnProps from './CartTableHeaderColumnProps';

const CartTableHeaderColumn = ({ children }: CartTableHeaderColumnProps) => (
  <h2 className="py-2.5 text-sm border-b">{children}</h2>
);

export default CartTableHeaderColumn;
