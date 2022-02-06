import { createContext } from 'react';
import type CartContextValue from './CartContextValue';

const CartContext = createContext<CartContextValue>({
  loading: false,
  items: [],
  handleAddToCart: () => {},
  quantity: 0,
  handleRemoveItem: () => {},
  handleDecrementItemQuantity: () => {},
  handleUpdateItemQuantity: () => {},
  handleIncrementItemQuantity: () => {},
  subtotal: 0,
  vat: 0,
  total: 0,
});

export default CartContext;
