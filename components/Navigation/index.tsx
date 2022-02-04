import type NavigationProps from './NavigationProps';
import NavigationItem from '../NavigationItem';

const Navigation = ({ items }: NavigationProps) => (
  <nav className="hidden lg:block">
    <ul className="flex justify-center gap-4 space-x-4">
      {items.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
