import Image from 'next/image';
import type ProductListItemProps from './ProductListItemProps';
import { useCart } from '../../hooks';
import { formatPrice } from '../../utils';
import Button from '../Button';

const ProductListItem = ({ product }: ProductListItemProps) => {
  const { handleAddToCart } = useCart();

  return (
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
        <p className="text-xs text-gray-500">{product.category}</p>
        <h2>{product.title}</h2>
        <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
        {product.inventory ? (
          <p className="text-sm text-green-700">{`${product.inventory} in stock`}</p>
        ) : (
          <p className="text-sm text-red-700">Out of stock</p>
        )}
      </div>
      <Button
        onClick={() => handleAddToCart(product)}
        disabled={!product.inventory}
      >
        Add to Cart
      </Button>
    </li>
  );
};

export default ProductListItem;
