import { NavLink as RemixLink } from '@remix-run/react';
import clsx from 'clsx';

import type { NavLinkProps } from '@remix-run/react';

export const NavLink = ({ children, className, to, ...rest }: NavLinkProps) => {
  return (
    <RemixLink to={to} className={clsx('hover:text-darkGrayishBlue', className)} {...rest}>
      {children}
    </RemixLink>
  );
};

export default NavLink;
