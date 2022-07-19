import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import parseFrontMatter from 'front-matter';
import invariant from 'tiny-invariant';

import { fs, fsp } from '~/utils/node.server';

export type MarkdownAttributes = {
  title: string;
  description: string;
};

export type MDXFile = {
  slug: string;
  title: string;
};

function isValidPostAttributes(attributes: any): attributes is MarkdownAttributes {
  return attributes?.title;
}

export async function getMDXFiles(folder: string) {
  const filePaths = path.join(process.cwd(), folder);
  const dir = await fsp.readdir(filePaths);

  return Promise.all(
    dir.map(async filename => {
      let file;
      if (!filename.endsWith('.mdx')) {
        file = await fsp.readFile(path.join(filePaths, filename, 'index.mdx'));
      } else {
        file = await fsp.readFile(path.join(filePaths, filename));
      }
      const { attributes } = parseFrontMatter(file.toString());
      invariant(isValidPostAttributes(attributes), `${filename} has bad meta data!`);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: attributes.title,
        description: attributes.description,
      };
    })
  );
}

export const getMDXFile = async (slug: string, folder: string) => {
  if (!slug) throw new Response('Not found', { status: 404 });
  const { default: remarkGfm } = await import('remark-gfm');
  let fullPath = path.join(process.cwd(), folder, slug);
  let postDir;
  let mdxSource = '';
  let files = {};
  const exists = fs.existsSync(fullPath);
  if (exists && (await fsp.lstat(fullPath)).isDirectory()) {
    postDir = fullPath; // need for bundling components
    const mdxPath = path.join(fullPath, 'index.mdx');
    mdxSource = await fsp.readFile(mdxPath, 'utf8');
    const mdxFiles = (await fsp.readdir(fullPath)).filter(filename => filename !== 'index.mdx');
    const results = await Promise.all(
      mdxFiles.map(async filename => fsp.readFile(`${fullPath}/${filename}`, 'utf8'))
    );
    files = Object.fromEntries(results.map((content, i) => [`./${mdxFiles[i]}`, content]));
  } else {
    if (!fullPath.endsWith('.mdx')) fullPath += '.mdx';
    // verify file exists
    if (!fs.existsSync(fullPath)) throw new Response('Not found', { status: 404 });
    mdxSource = await fsp.readFile(fullPath, 'utf8');
  }
  const { frontmatter, code } = await bundleMDX({
    source: mdxSource,
    files,
    cwd: postDir,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      return options;
    },
  });

  return { frontmatter, code };
};
