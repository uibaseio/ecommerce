import type CartTableColumnProps from './CartTableColumnProps';

const CartTableColumn = ({
  title,
  content,
  children,
}: CartTableColumnProps) => (
  <div className="relative flex items-center justify-between py-2.5 lg:py-0">
    <p className="text-sm font-semibold lg:hidden">{title}</p>
    {content && <p className="text-sm text-gray-500">{content}</p>}
    {children}
  </div>
);

export default CartTableColumn;
