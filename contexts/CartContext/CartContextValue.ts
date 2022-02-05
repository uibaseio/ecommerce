import type { CartItem, Product } from '../../types';

type CartContextValue = {
  items: CartItem[];
  handleAddToCart: (product: Product) => void;
  quantity: number;
  handleRemoveItem: (item: CartItem) => void;
};

export default CartContextValue;
