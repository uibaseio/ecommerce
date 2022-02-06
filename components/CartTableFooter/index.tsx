import { useCart } from '../../hooks';
import CartTableFooterRow from '../CartTableFooterRow';
import { formatPrice } from '../../utils';
import Button from '../Button';

const CartTableFooter = () => {
  const { subtotal, vat, total } = useCart();

  return (
    <div className="mt-2 space-y-2 border-t">
      <div>
        <CartTableFooterRow title="Subtotal" content={formatPrice(subtotal)} />
        <CartTableFooterRow title="20% VAT" content={formatPrice(vat)} />
        <CartTableFooterRow title="Total" content={formatPrice(total)} />
      </div>
      <Button onClick={() => {}}>Checkout</Button>
    </div>
  );
};

export default CartTableFooter;
