import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { getDocs, query, collection, where } from 'firebase/firestore';
import type { ProductListingPageProps } from '../types';
import { ProductList } from '../components';
import { firestore } from '../lib/firebase';

const TVAndHome: NextPage<ProductListingPageProps> = ({ products }) => (
  <>
    <Head>
      <title>TV &amp; Home</title>
      <meta name="description" content="TVAndHome" />
    </Head>
    <h1>TV &amp; Home</h1>
    <ProductList products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(
    query(
      collection(firestore, 'products'),
      where('category', '==', 'TV & Home')
    )
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

export default TVAndHome;
