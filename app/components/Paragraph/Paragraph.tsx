import clsx from 'clsx';

import type { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const classes = {
  base: 'max-w-sm',
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={clsx(classes.base, className)}>{children}</p>;
};
