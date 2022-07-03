import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

import { FeatureGroup } from '~/containers/FeatureGroup';

import { features } from '~/fixtures/features';

import type { Feature } from '~/types/feature';

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
    </>
  );
}
