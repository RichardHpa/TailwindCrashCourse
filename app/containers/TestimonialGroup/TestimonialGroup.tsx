import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

import type { Testimonial } from '~/types/testimonial';
interface TestimonialProps {
  testimonial: Testimonial;
}

export const TestimonialGroup = ({ testimonial }: TestimonialProps) => (
  <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray dark:bg-gray-800 md:w-1/3">
    <img src={`images/${testimonial.image}`} className="w-16 -mt-14" alt="" />
    <Heading variant="h5">{testimonial.name}</Heading>
    <Paragraph className="text-sm ">“{testimonial.testimonial}”</Paragraph>
  </div>
);
