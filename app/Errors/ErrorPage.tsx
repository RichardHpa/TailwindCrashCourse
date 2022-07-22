import { ButtonLink } from '~/components/Button';
import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

export type HeroProps = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  action?: React.ReactNode;
  code?: string | number;
};

export const ErrorPage = ({ error, heroProps }: { error?: Error; heroProps: HeroProps }) => {
  return (
    <>
      <noscript>
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: 30,
          }}
        >
          <h1 style={{ fontSize: '2em' }}>{heroProps.title}</h1>
          <p style={{ fontSize: '1.5em' }}>{heroProps.subtitle}</p>
          <small>Also, this site works much better with JavaScript enabled...</small>
        </div>
      </noscript>

      <section className="flex items-center h-full p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-lg text-center">
            {heroProps.code && (
              <Heading className="mb-8 font-extrabold text-9xl md:text-9xl dark:text-gray-600">
                <span className="sr-only">Error</span>
                {heroProps.code}
              </Heading>
            )}

            {heroProps.title && <Heading variant="h4">{heroProps.title}</Heading>}
            {heroProps.subtitle && <Paragraph>{heroProps.subtitle}</Paragraph>}
            {heroProps.action ? heroProps.action : <ButtonLink to="/">Back to homepage</ButtonLink>}
          </div>
        </div>
      </section>
    </>
  );
};

// function ErrorPage({
//   error,
//   articles,
//   heroProps,
// }: {
//   error?: Error
//   articles?: Array<MdxListItem>
//   heroProps: HeroSectionProps
// }) {
//   if (articles?.length) {
//     Object.assign(heroProps, {
//       arrowUrl: '#articles',
//       arrowLabel: 'But wait, there is more!',
//     })
//   }
//   return (
//     <>
// <noscript>
//   <div
//     style={{
//       backgroundColor: 'black',
//       color: 'white',
//       padding: 30,
//     }}
//   >
//     <h1 style={{fontSize: '2em'}}>{heroProps.title}</h1>
//     <p style={{fontSize: '1.5em'}}>{heroProps.subtitle}</p>
//     <small>
//       Also, this site works much better with JavaScript enabled...
//     </small>
//   </div>
// </noscript>
//       <main className="relative">
//         {error && process.env.NODE_ENV === 'development' ? (
//           <RedBox error={error} />
//         ) : null}
//         <HeroSection {...heroProps} />

//         {articles?.length ? (
//           <>
//             <div id="articles" />
//             <BlogSection
//               articles={articles}
//               title="Looking for something to read?"
//               description="Have a look at these articles."
//             />
//           </>
//         ) : null}
//       </main>
//     </>
//   )
// }
