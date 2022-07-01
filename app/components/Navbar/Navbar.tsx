import { NavLink } from '~/components/NavLink';
import { Button } from '~/components/Button';

export const Navbar = () => {
  const handleOnClick = () => {
    console.log('click');
  };
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="images/logo.svg" alt="Manage Logo" />
        </div>

        <div className="hidden space-x-6 md:flex">
          <NavLink to="#">Pricing</NavLink>
          <NavLink to="#">Product</NavLink>
          <NavLink to="#">About Us</NavLink>
          <NavLink to="#">Careers</NavLink>
          <NavLink to="#">Community</NavLink>
        </div>

        {/* <a
          href="#"
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a> */}
        <Button onClick={handleOnClick}>Get Started</Button>
      </div>
    </nav>
  );
};