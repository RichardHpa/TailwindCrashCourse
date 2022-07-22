import clsx from 'clsx';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from '@remix-run/react';

import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme, Theme } from '~/utils/ThemeProvider';
import { getThemeSession } from '~/utils/theme.server';

import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';
import { ErrorPage } from '~/Errors';

import styles from './tailwind.css';

import type { MetaFunction, LinksFunction, LoaderFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

export function App() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-gray-200">
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          <div className="container mx-auto p-6 mb-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}

export function HtmlWrapper({
  children,
  theme = Theme.DARK,
}: {
  children: React.ReactNode;
  theme?: Theme;
}) {
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-gray-200">
        <div className="flex flex-col h-screen justify-between">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const location = useLocation();
  console.error('CatchBoundary', caught);
  if (caught.status === 404) {
    return (
      <HtmlWrapper theme={Theme.DARK}>
        <ErrorPage
          heroProps={{
            title: "Oh no, you found a page that's missing stuff.",
            subtitle: `Sorry, we couldn't find a route ${location.pathname}.`,
            code: 404,
          }}
        />
      </HtmlWrapper>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error('ErrorBoundary', error);
  const location = useLocation();
  return (
    <HtmlWrapper theme={Theme.DARK}>
      <ErrorPage
        heroProps={{
          title: 'Oh no, something did not go well.',
          subtitle: `"${location.pathname}" is currently not working.`,
          code: 500,
        }}
      />
    </HtmlWrapper>
  );
}
