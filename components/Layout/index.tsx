import type LayoutProps from './LayoutProps';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="container py-4">{children}</main>
    <Footer />
  </>
);

export default Layout;
