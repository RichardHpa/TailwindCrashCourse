import { ErrorPage } from './ErrorPage';

export const FourOhFour = () => {
  return (
    <ErrorPage
      heroProps={{
        title: "Oh no, you found a page that's missing stuff.",
        subtitle: `Sorry, we couldn't find a route ${location.pathname}.`,
        code: 404,
      }}
    />
  );
};
