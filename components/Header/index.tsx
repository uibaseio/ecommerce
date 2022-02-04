import MobileNavigation from '../MobileNavigation';
import HomeLink from '../HomeLink';
import Navigation from '../Navigation';
import CartLink from '../CartLink';

const navigationItems = [
  {
    title: 'Mac',
    href: '/mac',
  },
  {
    title: 'iPad',
    href: '/ipad',
  },
  {
    title: 'iPhone',
    href: '/iphone',
  },
  {
    title: 'Watch',
    href: '/watch',
  },
  {
    title: 'AirPods',
    href: '/airpods',
  },
  {
    title: 'TV & Home',
    href: '/tv-and-home',
  },
];

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white border-b">
    <div className="container grid items-center grid-cols-[1fr,2fr,1fr] py-2">
      <MobileNavigation items={navigationItems} />
      <HomeLink />
      <Navigation items={navigationItems} />
      <div className="flex justify-end">
        <CartLink />
      </div>
    </div>
  </header>
);

export default Header;
