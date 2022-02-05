import { createContext } from 'react';
import type CartContextValue from './CartContextValue';

const CartContext = createContext<CartContextValue>({
  items: [],
  handleAddToCart: () => {},
  quantity: 0,
});

export default CartContext;
