import { Popover } from '@headlessui/react';
import type MobileNavigationProps from './MobileNavigationProps';
import MobileNavigationButton from '../MobileNavigationButton';
import MobileNavigationItem from '../MobileNavigationItem';

const MobileNavigation = ({ items }: MobileNavigationProps) => (
  <Popover className="lg:hidden">
    {({ open }) => (
      <>
        <MobileNavigationButton open={open} />
        <Popover.Panel
          className="absolute left-0 right-0 z-10 bg-white border-b top-[3.5625rem]"
          as="nav"
        >
          <ul className="container divide-y">
            {items.map((item) => (
              <MobileNavigationItem key={item.title} item={item} />
            ))}
          </ul>
        </Popover.Panel>
      </>
    )}
  </Popover>
);

export default MobileNavigation;
