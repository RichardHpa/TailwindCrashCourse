import clsx from 'clsx';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/ThemeProvider';

import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';
import { getThemeSession } from '~/utils/theme.server';

import styles from './tailwind.css';

import type { MetaFunction, LinksFunction, LoaderFunction } from '@remix-run/node';
import type { Theme } from '~/utils/ThemeProvider';

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
      <body className="bg-white dark:bg-gray-900">
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
