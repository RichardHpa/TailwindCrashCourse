import { Link, useLoaderData } from '@remix-run/react';

import { Heading } from '~/components/Heading';

import { getMDXFiles } from '~/utils/mdxTools/mdx.server';

import type { MDXFile } from '~/utils/mdxTools/mdx.server';

export const loader = async () => {
  return getMDXFiles('pages');
};

export default function Posts() {
  const posts = useLoaderData<MDXFile[]>();
  return (
    <div>
      <Heading>Posts</Heading>
      <hr />
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-4">
          {posts.map(post => (
            <Link key={post.slug} to={post.slug}>
              <div className="text-center p-6 space-y-6 rounded-lg bg-veryLightGray dark:bg-gray-800 h-full">
                <Heading variant="h6">{post.title}</Heading>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
