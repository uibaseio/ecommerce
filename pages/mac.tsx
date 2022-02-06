import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { getDocs, query, collection, where } from 'firebase/firestore';
import type { ProductListingPageProps } from '../types';
import { ProductList } from '../components';
import { firestore } from '../lib/firebase';

const Mac: NextPage<ProductListingPageProps> = ({ products }) => (
  <>
    <Head>
      <title>Mac</title>
      <meta name="description" content="Mac" />
    </Head>
    <h1>Mac</h1>
    <ProductList products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'products'), where('category', '==', 'Mac'))
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

export default Mac;
