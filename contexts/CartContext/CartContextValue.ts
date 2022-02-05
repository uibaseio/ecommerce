import type { CartItem, Product } from '../../types';

type CartContextValue = {
  items: CartItem[];
  handleAddToCart: (product: Product) => void;
  quantity: number;
  handleRemoveItem: (item: CartItem) => void;
  handleDecrementItemQuantity: (
    item: CartItem,
    callback: (quantity: number) => void
  ) => void;
  handleUpdateItemQuantity: (item: CartItem, quantity: number) => void;
  handleIncrementItemQuantity: (
    item: CartItem,
    callback: (quantity: number) => void
  ) => void;
};

export default CartContextValue;
