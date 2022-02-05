import type NavigationProps from './NavigationProps';
import NavigationItem from '../NavigationItem';

const Navigation = ({ items }: NavigationProps) => (
  <nav className="hidden lg:block">
    <ul className="flex justify-center space-x-8">
      {items.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
