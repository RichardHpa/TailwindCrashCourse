import type { Testimonial } from '~/types/testimonial';

interface TestimonialProps {
  testimonial: Testimonial;
}

export const TestimonialGroup = ({ testimonial }: TestimonialProps) => (
  <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
    <img src={`images/${testimonial.image}`} className="w-16 -mt-14" alt="" />
    <h5 className="text-lg font-bold">{testimonial.name}</h5>
    <p className="text-sm text-darkGrayishBlue">“{testimonial.testimonial}”</p>
  </div>
);
