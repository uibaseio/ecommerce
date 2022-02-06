import type { CartItem, Product } from '../../types';

type CartContextValue = {
  loading: boolean;
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
  subtotal: number;
  vat: number;
  total: number;
};

export default CartContextValue;
