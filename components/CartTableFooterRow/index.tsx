import type CartTableFooterRowProps from './CartTableFooterRowProps';

const CartTableFooterRow = ({ title, content }: CartTableFooterRowProps) => (
  <div className="flex lg:grid grid-cols-[1fr,1fr,1fr,1fr,2.5rem] justify-between py-2.5">
    <p className="text-sm font-semibold">{title}</p>
    <p className="col-start-4 text-sm text-gray-500">{content}</p>
  </div>
);

export default CartTableFooterRow;
