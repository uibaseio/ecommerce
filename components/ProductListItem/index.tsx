import Image from 'next/image';
import type ProductListItemProps from './ProductListItemProps';
import { formatPrice } from '../../utils';
import Button from '../Button';

const ProductListItem = ({ product }: ProductListItemProps) => (
  <li className="p-4 space-y-4 border rounded-lg">
    <div className="relative w-full h-32">
      <Image
        src={product.thumbnails[0].src}
        alt={product.thumbnails[0].alt}
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
    <div>
      <h2>{product.title}</h2>
      <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
    </div>
    <Button>Add to Cart</Button>
  </li>
);

export default ProductListItem;
