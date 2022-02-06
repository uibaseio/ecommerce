import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { getDocs, query, collection, where } from 'firebase/firestore';
import type { ProductListingPageProps } from '../types';
import { ProductList } from '../components';
import { firestore } from '../lib/firebase';

const AirPods: NextPage<ProductListingPageProps> = ({ products }) => (
  <>
    <Head>
      <title>AirPods</title>
      <meta name="description" content="AirPods" />
    </Head>
    <h1>AirPods</h1>
    <ProductList products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'products'), where('category', '==', 'AirPods'))
  );
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

export default AirPods;
