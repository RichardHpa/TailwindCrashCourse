import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const classes = {
  base: 'p-3 px-6 rounded-full text-white',
  variant: {
    primary: 'bg-brightRed hover:bg-brightRedLight disabled:bg-brightRedLight',
    secondary: 'bg-darkBlue hover:bg-veryDarkBlue disabled:bg-veryDarkBlue',
  },
};

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...buttonProps
}: ButtonProps & JSX.IntrinsicElements['button']) => {
  return (
    <button className={clsx(classes.base, classes.variant[variant], className)} {...buttonProps}>
      {children}
    </button>
  );
};

interface ButtonBaseProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  variant?: 'primary' | 'secondary';
  as?: string | React.ElementType;
}

export const ButtonBase = ({
  children,
  variant = 'primary',
  className,
  as = 'button',
  ...buttonProps
}: ButtonBaseProps) => {
  const Element = as;
  return (
    <Element className={clsx(classes.base, classes.variant[variant], className)} {...buttonProps}>
      {children}
    </Element>
  );
};
