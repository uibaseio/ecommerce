import type ProductListProps from './ProductListProps';
import ProductListItem from '../ProductListItem';

const ProductList = ({ products }: ProductListProps) => (
  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {products.map((product) => (
      <ProductListItem product={product} key={product.id} />
    ))}
  </ul>
);

export default ProductList;
