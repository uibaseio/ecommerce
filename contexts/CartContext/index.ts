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
});

export default CartContext;
