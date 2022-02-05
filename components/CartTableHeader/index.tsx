import CartTableHeaderColumn from '../CartTableHeaderColumn';

const CartTableHeader = () => (
  <div className="hidden grid-cols-[1fr,1fr,1fr,1fr,2.5rem] lg:grid">
    <CartTableHeaderColumn>Product</CartTableHeaderColumn>
    <CartTableHeaderColumn>Price</CartTableHeaderColumn>
    <CartTableHeaderColumn>Quantity</CartTableHeaderColumn>
    <CartTableHeaderColumn>Subtotal</CartTableHeaderColumn>
    <div className="border-b" />
  </div>
);

export default CartTableHeader;
