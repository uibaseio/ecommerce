import type ButtonProps from './ButtonProps';

const Button = ({ children, onClick, disabled = false }: ButtonProps) => (
  <button
    className="w-full h-10 px-2 text-sm font-semibold text-white rounded-lg bg-primary-600 hover:bg-primary-800 disabled:opacity-50"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
