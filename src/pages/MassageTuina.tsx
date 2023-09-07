import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const MassageTuina: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/massage-tuina-background.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Massage TuiNa | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Massage TuiNa</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-4 font-monserrat px-4 py-4">
            <p className="">
              <span className="fw-bolder">Tui</span> signifie "Pousser" et{' '}
              <span className="fw-bolder">Na</span> "Saisir".
            </p>
            <p>
              Le Tuina permet de stimuler la circulation sanguine, d'assouplir les muscles et les
              articulations.
            </p>
            <p className="mb-0 pb-0">
              Le massage TuiNa est une expérience relaxante qui peut aider à soulager les tensions
              accumulées dans le corps, à réduire la fatigue et à favoriser un état de calme et de
              tranquillité.
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

MassageTuina.displayName = 'MassageTuina';
