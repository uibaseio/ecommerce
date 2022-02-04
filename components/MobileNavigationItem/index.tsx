import Link from 'next/link';
import type MobileNavigationItemProps from './MobileNavigationItemProps';

const MobileNavigationItem = ({ item }: MobileNavigationItemProps) => (
  <li>
    <Link href={item.href}>
      <a className="block py-2">{item.title}</a>
    </Link>
  </li>
);

export default MobileNavigationItem;
