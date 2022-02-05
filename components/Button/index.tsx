import type ButtonProps from './ButtonProps';

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className="w-full h-10 px-2 text-sm font-semibold text-white rounded-lg bg-primary-600"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
