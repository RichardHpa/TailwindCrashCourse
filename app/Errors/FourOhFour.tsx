import { ButtonLink } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

export const FourOhFour = () => {
  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Heading className="mb-8 font-extrabold text-9xl md:text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </Heading>
          <Heading variant="h4">Sorry, we couldn't find this page.</Heading>
          <Paragraph className="mt-4 mb-8">
            Currently no other links other than the homepage have been developed
          </Paragraph>
          <ButtonLink to="/">Back to homepage</ButtonLink>
        </div>
      </div>
    </section>
  );
};
