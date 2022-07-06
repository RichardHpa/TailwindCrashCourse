import clsx from 'clsx';
// TODO: I want to make these buttons more flexible and don't require any sort of library specific components to be build. ie pass in the Link from remix as a prop rather than being built here.
import { Link } from '@remix-run/react';

import type { ReactNode } from 'react';
import type { LinkProps } from '@remix-run/react';

interface ButtonBaseProps {
  color?: 'primary' | 'secondary' | 'white';
  variant?: 'outlined' | 'contained';
  children: ReactNode | ReactNode[];
  className?: string;
}

const classes = {
  base: 'p-3 px-6 rounded-full text-white',
  color: {
    primary: 'bg-brightRed hover:bg-brightRedLight',
    secondary: 'bg-darkBlue hover:bg-veryDarkBlue',
    white: 'bg-white text-brightRed hover:bg-veryDarkBlue',
  },
};

export const Button = ({
  children,
  color = 'primary',
  className,
  ...buttonProps
}: ButtonBaseProps & JSX.IntrinsicElements['button']) => {
  return (
    <button className={clsx(classes.base, classes.color[color], className)} {...buttonProps}>
      {children}
    </button>
  );
};

type ButtonLinkProps = ButtonBaseProps & LinkProps;

export const ButtonLink = ({
  children,
  color = 'primary',
  className,
  to,
  ...buttonProps
}: ButtonLinkProps) => {
  return (
    <Link to={to} className={clsx(classes.base, classes.color[color], className)} {...buttonProps}>
      {children}
    </Link>
  );
};

// TODO: Need to figure out how to combine color and variant props.
function getClassName({ className }: { className?: string; variant: string; color: string }) {
  return clsx('p-3 rounded-full hover:bg-gray-50', className);
}

export const IconButton = ({
  children,
  color = 'primary',
  variant = 'contained',
  className,
  ...buttonProps
}: ButtonBaseProps & JSX.IntrinsicElements['button']) => {
  return (
    <button className={getClassName({ variant, color, className })} {...buttonProps}>
      {children}
    </button>
  );
};
