import { Heading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

import type { Feature } from '~/types/feature';

interface FeatureGroupProps {
  feature: Feature;
}

export const FeatureGroup = ({ feature }: FeatureGroupProps) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent dark:bg-gray-800 dark:md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            0{feature.id}
          </div>
          <Heading variant="h6" className=" md:mb-4 md:hidden">
            {feature.name}
          </Heading>
        </div>
      </div>

      <div>
        <Heading variant="h5" className="hidden mb-4 md:block">
          {feature.name}
        </Heading>
        <Paragraph className="max-w-sm">{feature.description}</Paragraph>
      </div>
    </div>
  );
};
