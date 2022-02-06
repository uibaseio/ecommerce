import type Thumbnail from './Thumbnail';

type Product = {
  id: string;
  title: string;
  price: number;
  thumbnails: Thumbnail[];
  inventory: number;
};

export default Product;
