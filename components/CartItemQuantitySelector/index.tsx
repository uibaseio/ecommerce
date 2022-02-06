import { useState, useEffect } from 'react';
import { IoRemoveOutline, IoAddOutline } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import type CartItemQuantitySelectorProps from './CartItemQuantitySelectorProps';
import { useCart } from '../../hooks';

const CartItemQuantitySelector = ({ item }: CartItemQuantitySelectorProps) => {
  const [quantityInputValue, setQuantityInputValue] = useState(
    item.quantity.toString()
  );
  const quantityInputIntegerValue = parseInt(quantityInputValue, 10);
  const {
    handleDecrementItemQuantity,
    handleUpdateItemQuantity,
    handleIncrementItemQuantity,
  } = useCart();
  const iconSize = 20;

  useEffect(() => {
    if (quantityInputIntegerValue)
      handleUpdateItemQuantity(item, quantityInputIntegerValue);
    else handleUpdateItemQuantity(item, 1);
  }, [quantityInputIntegerValue, handleUpdateItemQuantity, item]);

  return (
    <div className="absolute top-0 bottom-0 right-0 flex items-center h-10 lg:left-0 lg:right-auto">
      <button
        className="icon-button"
        type="button"
        onClick={() =>
          handleDecrementItemQuantity(item, (quantity) =>
            setQuantityInputValue(quantity.toString())
          )
        }
        aria-label={`Decrement ${item.product.title} quantity`}
      >
        <IoRemoveOutline size={iconSize} />
      </button>
      <input
        className="w-8 p-0 text-sm text-center border-none"
        type="number"
        value={quantityInputValue}
        onChange={(event) => setQuantityInputValue(event.target.value)}
        onBlur={() => {
          if (quantityInputIntegerValue > item.product.inventory) {
            setQuantityInputValue(item.product.inventory.toString());

            return toast.error(`Reached maximum quantity`);
          }

          if (!quantityInputIntegerValue)
            return setQuantityInputValue(item.quantity.toString());
        }}
        aria-label={`${item.product.title} quantity`}
      />
      <button
        className="icon-button"
        type="button"
        onClick={() =>
          handleIncrementItemQuantity(item, (quantity) =>
            setQuantityInputValue(quantity.toString())
          )
        }
        aria-label={`Increment ${item.product.title} quantity`}
      >
        <IoAddOutline size={iconSize} />
      </button>
    </div>
  );
};

export default CartItemQuantitySelector;
