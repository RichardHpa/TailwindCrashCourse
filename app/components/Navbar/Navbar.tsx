import { useState } from 'react';
import clsx from 'clsx';

import { NavLink } from '~/components/NavLink';
import { Button, IconButton } from '~/components/Button';
import { MenuIcon } from '@heroicons/react/solid';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="images/logo.svg" alt="Manage Logo" />
        </div>

        <div className="space-x-6 hidden md:flex">
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/community">Community</NavLink>
        </div>

        <Button className="hidden md:block">Get Started</Button>

        <IconButton variant="outlined" onClick={handleOpenNav} className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </IconButton>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div
            className={clsx(
              'absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md',
              {
                flex: isOpen,
                hidden: !isOpen,
              }
            )}
          >
            <NavLink to="/pricing" onClick={handleOpenNav}>
              Pricing
            </NavLink>
            <NavLink to="/product" onClick={handleOpenNav}>
              Product
            </NavLink>
            <NavLink to="/about" onClick={handleOpenNav}>
              About Us
            </NavLink>
            <NavLink to="/careers" onClick={handleOpenNav}>
              Careers
            </NavLink>
            <NavLink to="/community" onClick={handleOpenNav}>
              Community
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
