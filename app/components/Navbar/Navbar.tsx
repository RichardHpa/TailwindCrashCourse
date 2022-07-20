import { useState } from 'react';
import clsx from 'clsx';
import { Link } from '@remix-run/react';

import { Theme, useTheme } from '~/utils/ThemeProvider';

import { NavLink } from '~/components/NavLink';
import { Button, IconButton } from '~/components/Button';
import { CompanyLogo } from '~/components/CompanyLogo';

import { MenuIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';

const navLinks = [
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Product',
    to: '/product',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Posts',
    to: '/posts',
  },
  {
    label: 'Community',
    to: '/community',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link to="/">
            <CompanyLogo variant={theme === Theme.LIGHT ? 'dark' : 'light'} />
          </Link>
        </div>

        <div className="space-x-6 hidden md:flex">
          {navLinks.map(link => (
            <NavLink key={link.label} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex space-x-2">
          <Button className="hidden md:block">Get Started</Button>

          <IconButton variant="outlined" onClick={handleOpenNav} className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </IconButton>

          <IconButton variant="outlined" onClick={toggleTheme}>
            {theme === Theme.LIGHT ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div
            className={clsx(
              'absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white dark:bg-gray-800 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md',
              {
                flex: isOpen,
                hidden: !isOpen,
              }
            )}
          >
            {navLinks.map(link => (
              <NavLink key={link.label} to={link.to} onClick={handleOpenNav}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
