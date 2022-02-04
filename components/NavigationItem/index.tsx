import Link from 'next/link';
import type NavigationItemProps from './NavigationItemProps';

const NavigationItem = ({ item }: NavigationItemProps) => (
  <li>
    <Link href={item.href}>
      <a className="text-sm">{item.title}</a>
    </Link>
  </li>
);

export default NavigationItem;
