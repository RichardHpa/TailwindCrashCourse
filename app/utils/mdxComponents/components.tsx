import { memo } from 'react';
import { Heading } from '~/components/Heading';

export const components = {
  h1: (() => {
    const H1 = (props: any) => <Heading {...props} variant="h1" />;
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = (props: any) => <Heading {...props} variant="h2" />;
    return memo(H2);
  })(),
};
