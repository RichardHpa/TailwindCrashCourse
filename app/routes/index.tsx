import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

import { FeatureGroup } from '~/containers/FeatureGroup';
import { TestimonialGroup } from '~/containers/TestimonialGroup';

import { features } from '~/fixtures/features';
import { testimonials } from '~/fixtures/testimonials';

import type { Feature } from '~/types/feature';
import type { Testimonial } from '~/types/testimonial';

export default function Index() {
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
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialGroup key={testimonial.id} testimonial={testimonial} />
            ))}
            {/* <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="images/avatar-anisha.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to maintain visibility on
                larger milestones at all times keeps everyone motivated.”
              </p>
            </div>

            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src="images/avatar-ali.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since using Manage. There
                is no more cross-channel confusion and everyone is much more focused.”
              </p>
            </div>

            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src="images/avatar-richard.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to maintain visibility on
                larger milestones at all times keeps everyone motivated.”
              </p>
            </div> */}
          </div>

          <div className="my-16">
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
    </>
  );
}
