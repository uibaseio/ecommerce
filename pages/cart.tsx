import type { NextPage } from 'next';
import Head from 'next/head';
import { CartTable } from '../components';

const Cart: NextPage = () => (
  <>
    <Head>
      <title>Cart</title>
      <meta name="description" content="Cart" />
    </Head>
    <h1>Cart</h1>
    <CartTable />
  </>
);

export default Cart;
