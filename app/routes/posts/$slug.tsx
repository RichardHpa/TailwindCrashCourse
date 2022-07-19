import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';

import { Heading } from '~/components/Heading';
import { MDXComponent } from '~/components/MDXComponent';
import { getMDXFile } from '~/utils/mdxTools/mdx.server';

import type { LoaderFunction } from '@remix-run/node';

type LoaderData = {
  frontmatter: any;
  code: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  invariant(params.slug, 'expected params.slug');
  return json(await getMDXFile(params.slug, 'pages'));
};

export default function Post() {
  const { code, frontmatter } = useLoaderData<LoaderData>();

  return (
    <div>
      <Link to="/posts">← Back to blog index</Link>
      <Heading variant="h2">{frontmatter.title}</Heading>

      <MDXComponent code={code} />
    </div>
  );
}
