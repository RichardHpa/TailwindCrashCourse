import clsx from 'clsx';
import { overrideTailwindClasses } from 'tailwind-override';

import type { ReactNode } from 'react';

const classes = {
  base: 'font-bold text-slate-900 dark:text-white mb-4',
  variant: {
    h1: 'text-4xl md:text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
  },
};

interface HeadingProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Heading = ({ children, variant = 'h1', className, ...headingProps }: HeadingProps) => {
  const Component = variant;
  return (
    <Component
      className={overrideTailwindClasses(clsx(classes.base, classes.variant[variant], className))}
      {...headingProps}
    >
      {children}
    </Component>
  );
};
