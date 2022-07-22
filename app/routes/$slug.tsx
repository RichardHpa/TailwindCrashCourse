import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';

import { getMDXFile } from '~/utils/mdxTools/mdx.server';

import { Heading } from '~/components/Heading';
import { MDXComponent } from '~/components/MDXComponent';

import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params, request }) => {
  invariant(params.slug, 'expected params.slug');
  return json(await getMDXFile(params.slug, 'pages'));
};

export default () => {
  const { code, frontmatter } = useLoaderData();

  return (
    <section>
      <Heading variant="h1">{frontmatter.title}</Heading>
      <hr />
      <div className="mt-4">
        <MDXComponent code={code} />
      </div>
    </section>
  );
};
