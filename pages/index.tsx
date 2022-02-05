import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { getDocs, collection } from 'firebase/firestore';
import type { HomeProps } from '../types';
import { ProductList } from '../components';
import { firestore } from '../lib/firebase';

const Home: NextPage<HomeProps> = ({ products }) => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Home" />
    </Head>
    <h1>Products</h1>
    <ProductList products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'products'));
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      products,
    },
  };
};

export default Home;
