import type { Product } from '../../types';

type CartContextValue = {
  handleAddToCart: (product: Product) => void;
  quantity: number;
};

export default CartContextValue;
