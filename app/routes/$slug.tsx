import { useMemo } from 'react';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getMDXComponent } from 'mdx-bundler/client';

import { getMDXFile } from '~/utils/getMdx';
import { components } from '~/utils/mdxComponents/components';

import { Heading } from '~/components/Heading';

import { FourOhFour } from '~/Errors';

import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params, request }) => {
  invariant(params.slug, 'expected params.slug');
  return json(await getMDXFile(params.slug, 'pages'));
};

export default () => {
  const { code, frontmatter } = useLoaderData();

  const Component = useMemo(() => getMDXComponent(code), [code]);
  if (!code) {
    return <FourOhFour />;
  }

  return (
    <section>
      <Heading variant="h1">{frontmatter.title}</Heading>
      <hr />
      <div className="mt-4">
        <Component components={components} />
      </div>
    </section>
  );
};
