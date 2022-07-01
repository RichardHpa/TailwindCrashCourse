import { Button } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

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
    </>
  );
}
