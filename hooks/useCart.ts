import { useContext } from 'react';
import { CartContext } from '../contexts';

const useCart = () => useContext(CartContext);

export default useCart;
