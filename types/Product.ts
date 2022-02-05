import type Thumbnail from './Thumbnail';

type Product = {
  id: string;
  title: string;
  price: number;
  thumbnails: Thumbnail[];
};

export default Product;
