import { NavLink } from '~/components/NavLink';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <img src="images/logo-white.svg" className="h-8" alt="" />
          </div>

          <div className="flex justify-center space-x-4">
            <a href="/">
              <img src="images/icon-facebook.svg" alt="" className="h-8" />
            </a>

            <a href="/">
              <img src="images/icon-youtube.svg" alt="" className="h-8" />
            </a>

            <a href="/">
              <img src="images/icon-twitter.svg" alt="" className="h-8" />
            </a>

            <a href="/">
              <img src="images/icon-pinterest.svg" alt="" className="h-8" />
            </a>

            <a href="/">
              <img src="images/icon-instagram.svg" alt="" className="h-8" />
            </a>
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <NavLink to="/" className="hover:text-brightRed">
              Home
            </NavLink>
            <NavLink to="pricing" className="hover:text-brightRed">
              Pricing
            </NavLink>
            <NavLink to="products" className="hover:text-brightRed">
              Products
            </NavLink>
            <NavLink to="about" className="hover:text-brightRed">
              About
            </NavLink>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <NavLink to="careers" className="hover:text-brightRed">
              Careers
            </NavLink>
            <NavLink to="community" className="hover:text-brightRed">
              Community
            </NavLink>
            <NavLink to="privacy" className="hover:text-brightRed">
              Privacy Policy
            </NavLink>
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
