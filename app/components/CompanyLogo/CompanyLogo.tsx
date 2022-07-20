import clsx from 'clsx';

interface CompanyLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const CompanyLogo = ({ className, variant = 'light' }: CompanyLogoProps) => {
  return (
    <img
      src={variant === 'light' ? '/images/logo-white.svg' : '/images/logo.svg'}
      alt="Manage Logo"
      className={clsx(className)}
    />
  );
};
