import type ButtonProps from './ButtonProps';

const Button = ({ children }: ButtonProps) => (
  <button
    className="w-full h-10 px-2 text-sm font-semibold text-white rounded-lg bg-primary-600"
    type="button"
  >
    {children}
  </button>
);

export default Button;
