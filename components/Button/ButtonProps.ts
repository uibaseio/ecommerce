import type { ReactText } from 'react';

type ButtonProps = {
  children: ReactText;
  onClick: () => void;
  disabled?: boolean;
};

export default ButtonProps;
