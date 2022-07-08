import clsx from 'clsx';

export interface InputProps {
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  className?: string;
}

const classes = {
  base: 'flex-1 px-4 rounded-full focus:outline-none',
};
export const Input = ({ placeholder, type = 'text', className }: InputProps) => {
  return <input type={type} className={clsx(classes.base, className)} placeholder={placeholder} />;
};
