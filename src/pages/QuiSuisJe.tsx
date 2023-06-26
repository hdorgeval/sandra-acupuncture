import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/qui-suis-je-background.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPosition="33%"
        htmlTitle={`Qui-suis je? | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Qui suis-je ?</PageTitle>
          </div>
          <div className="" style={{ minHeight: '3rem' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="">Morbi sed vestibulum ipsum, aliquam fermentum leo.</p>
            <p className="">
              Sed accumsan leo vitae placerat interdum. Phasellus vitae nibh lobortis, congue arcu
              nec, venenatis magna. Donec posuere nisi eu tellus pharetra, sit amet congue purus
              sagittis.
            </p>
            <p>
              Pellentesque id aliquam erat. Pellentesque tempus et justo vel placerat. Praesent id
              ipsum eu neque tincidunt laoreet vel quis urna.
            </p>
            <p className="mb-0 pb-0">
              Curabitur in mauris dapibus, aliquam velit sit amet, consequat metus. Praesent at est
              nunc. Fusce sed erat ex. Aliquam fringilla euismod vestibulum. Donec imperdiet nec est
              id aliquam. Sed sed ante ipsum. Cras id malesuada eros. Proin pharetra ultricies
              accumsan. Etiam placerat tempor nunc vitae cursus.
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
