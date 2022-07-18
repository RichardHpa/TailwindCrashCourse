import { memo } from 'react';

import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

import type { ComponentMap } from 'mdx-bundler/client';

export const components: ComponentMap = {
  h1: (() => {
    const H1 = (props: any) => <Heading {...props} variant="h1" />;
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = (props: any) => <Heading {...props} variant="h2" />;
    return memo(H2);
  })(),
  h3: (() => {
    const H3 = (props: any) => <Heading {...props} variant="h3" />;
    return memo(H3);
  })(),
  h4: (() => {
    const H4 = (props: any) => <Heading {...props} variant="h4" />;
    return memo(H4);
  })(),
  h5: (() => {
    const H5 = (props: any) => <Heading {...props} variant="h5" />;
    return memo(H5);
  })(),
  h6: (() => {
    const H6 = (props: any) => <Heading {...props} variant="h6" />;
    return memo(H6);
  })(),
  p: (props => {
    const p = (props: any) => <Paragraph {...props} />;
    return memo(p);
  })(),
  a: (() => {
    const a = (props: any) => (
      <a
        {...props}
        className="no-underline hover:underline text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        {props.children}
      </a>
    );
    return memo(a);
  })(),
};
