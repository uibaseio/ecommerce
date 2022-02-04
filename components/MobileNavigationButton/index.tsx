import { Popover } from '@headlessui/react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import type MobileNavigationButtonProps from './MobileNavigationButtonProps';

const MobileNavigationButton = ({ open }: MobileNavigationButtonProps) => {
  const iconSize = 20;

  return (
    <Popover.Button
      className="relative -left-2 icon-button"
      aria-label={!open ? 'Open mobile navigation' : 'Close mobile navigation'}
    >
      {!open ? (
        <IoMenuOutline size={iconSize} />
      ) : (
        <IoCloseOutline size={iconSize} />
      )}
    </Popover.Button>
  );
};

export default MobileNavigationButton;
