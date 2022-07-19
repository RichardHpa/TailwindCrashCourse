import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { components } from '~/utils/mdxTools/components';

interface MDXComponentProps {
  code: string;
}
export const MDXComponent = ({ code }: MDXComponentProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
};
