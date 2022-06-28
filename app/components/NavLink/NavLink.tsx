import { NavLink as RemixLink } from '@remix-run/react';

import type { NavLinkProps } from '@remix-run/react';

export const NavLink = ({ children, className, to, ...rest }: NavLinkProps) => {
  return (
    <RemixLink to={to} className={`hover:text-darkGrayishBlue ${className}`} {...rest}>
      {children}
    </RemixLink>
  );
};

export default NavLink;
