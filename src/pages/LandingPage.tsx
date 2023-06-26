import { FC } from 'react';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { Quote } from '../components/Quote';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
export const LandingPage: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/landing-page-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPosition="44%"
        htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}
      >
        <div
          className="d-flex flex-column justify-content-start align-items-center"
          style={{ height: '100vh', minHeight: '100vh' }}
        >
          <div className="flex-grow-half"></div>
          <div className="mt-4">
            <PageTitle className="font-mali">L'acupuncture</PageTitle>
            <PageTitle className="font-mali">au service de votre</PageTitle>
            <PageTitle className="font-mali">épanouissement physique</PageTitle>
            <PageTitle className="font-mali">émotionnel</PageTitle>
            <PageTitle className="font-mali"> et </PageTitle>
            <PageTitle className="font-mali">spirituel</PageTitle>
          </div>

          <OpenExternalLinkButton
            className="btn btn-outline-light fw-bolder w-75 mt-4"
            link="https://calendly.com/henri-d-orgeval/acupuncture"
            title="Prendre un rendez-vous"
            analyticsEvent="rdv-ou-contact"
          >
            <div className="d-flex flex-column align-items-center">
              <span>Prendre un rendez-vous</span>
            </div>
          </OpenExternalLinkButton>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Quote
                sentence="Si tu écoutes ton corps quand il te chuchote, tu n'auras pas à l'entendre crier."
                author="Sagesse Tibétaine"
              />
            </div>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

LandingPage.displayName = 'LandingPage';
