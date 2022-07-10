import { Link } from '@remix-run/react';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { CompanyLogo } from '~/components/CompanyLogo';

const primaryLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Products',
    to: '/products',
  },
  {
    label: 'About',
    to: '/about',
  },
];
const secondaryLinks = [
  {
    label: 'Careers',
    to: '/careers',
  },
  {
    label: 'Community',
    to: '/community',
  },
  {
    label: 'Privacy Policy',
    to: '/privacy',
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    to: 'https://facebook.com',
    img: 'icon-facebook.svg',
  },
  {
    label: 'YouTube',
    to: 'https://youtube.com',
    img: 'icon-youtube.svg',
  },
  {
    label: 'Twitter',
    to: 'https://twitter.com',
    img: 'icon-twitter.svg',
  },
  {
    label: 'Pinterest',
    to: 'https://pinterest.com',
    img: 'icon-pinterest.svg',
  },
  {
    label: 'Instagram',
    to: 'https://instagram.com',
    img: 'icon-instagram.svg',
  },
];

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <CompanyLogo className="h-8" variant="light" />
          </div>

          <div className="flex justify-center space-x-4">
            {socialLinks.map(link => (
              <a href={link.to} key={link.label}>
                <img src={`images/${link.img}`} alt={link.label} className="h-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            {primaryLinks.map(link => (
              <Link key={link.to} to={`${link.to.toLowerCase()}`} className="hover:text-brightRed">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {secondaryLinks.map(link => (
              <Link key={link.to} to={`${link.to.toLowerCase()}`} className="hover:text-brightRed">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <Input placeholder="Updated in your inbox" />
              <Button>Go</Button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
