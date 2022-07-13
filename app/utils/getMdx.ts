import path from 'path';
import { fs, fsp } from '~/utils/node.server';
import { bundleMDX } from '~/utils/mdx.server';

export const getMDXFile = async (slug: string, folder: string) => {
  if (!slug) throw new Response('Not found', { status: 404 });
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
  });

  return { frontmatter, code };
};
