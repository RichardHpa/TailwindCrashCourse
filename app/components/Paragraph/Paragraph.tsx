import clsx from 'clsx';

import type { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const classes = {
  base: 'text-darkGrayishBlue mb-2',
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={clsx(classes.base, className)}>{children}</p>;
};
