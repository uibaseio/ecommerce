import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { Layout } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
