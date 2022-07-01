import clsx from 'clsx';
// TODO: I want to make these buttons more flexible and don't require any sort of library specific components to be build. ie pass in the Link from remix as a prop rather than being built here.
import { Link } from '@remix-run/react';

import type { ReactNode } from 'react';
import type { LinkProps } from '@remix-run/react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode | ReactNode[];
  className?: string;
}

const classes = {
  base: 'p-3 px-6 rounded-full text-white',
  variant: {
    primary: 'bg-brightRed hover:bg-brightRedLight',
    secondary: 'bg-darkBlue hover:bg-veryDarkBlue',
  },
};

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...buttonProps
}: ButtonBaseProps & JSX.IntrinsicElements['button']) => {
  return (
    <button className={clsx(classes.base, classes.variant[variant], className)} {...buttonProps}>
      {children}
    </button>
  );
};

type ButtonLinkProps = ButtonBaseProps & LinkProps;

export const ButtonLink = ({
  children,
  variant = 'primary',
  className,
  to,
  ...buttonProps
}: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={clsx(classes.base, classes.variant[variant], className)}
      {...buttonProps}
    >
      {children}
    </Link>
  );
};
