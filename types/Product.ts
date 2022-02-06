import type Thumbnail from './Thumbnail';

type Product = {
  id: string;
  title: string;
  price: number;
  thumbnails: Thumbnail[];
  inventory: number;
  category: string;
};

export default Product;
