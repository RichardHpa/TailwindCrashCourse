import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

import { FeatureGroup } from '~/containers/FeatureGroup';
import { TestimonialGroup } from '~/containers/TestimonialGroup';

import { features } from '~/fixtures/features';
import { testimonials } from '~/fixtures/testimonials';

import useMedia from '~/hooks/useMedia';

import type { Feature } from '~/types/feature';

export default function Index() {
  const isWide = useMedia('(min-width: 768px)', false);

  return (
    <>
      <section id="hero">
        <div className="flex flex-col-reverse items-center mt-10 space-y-0 md:space-y-0 md:flex-row">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <Heading className="max-w-md text-center md:text-left">
              Bring everyone together to build better products
            </Heading>
            <Paragraph className="text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the
              larger team goals in view.
            </Paragraph>
            <div className="flex justify-center md:justify-start">
              <Button>Get Started</Button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img src="images/illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <Heading variant="h2" className="max-w-md text-center md:text-left">
              What's different about Manage?
            </Heading>
            <Paragraph className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the complexity. Our
              software is tailor-made for modern digital product teams.
            </Paragraph>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            {features.map((feature: Feature) => (
              <FeatureGroup key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">What's Different About Manage?</h2>

          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <TestimonialGroup testimonial={testimonials[0]} />
            {isWide && (
              <>
                <TestimonialGroup testimonial={testimonials[1]} />
                <TestimonialGroup testimonial={testimonials[2]} />
              </>
            )}
          </div>

          <div className="my-16">
            <Button>Get Started</Button>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <Heading variant="h2" className="text-white text-center md:max-w-xl md:text-left">
            Simplify how your team works today
          </Heading>

          <div>
            <Button className="bg-white text-brightRed hover:bg-veryDarkBlue" color="custom">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
