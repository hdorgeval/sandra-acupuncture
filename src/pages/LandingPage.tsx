import { FC } from 'react';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { useGuidedTour } from '../hooks/useGuidedTour';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const LandingPage: FC = () => {
  useGuidedTour();
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/landing-page-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPosition="33%"
        htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}
      >
        <div className="h-100 d-flex flex-column justify-content-between align-items-center">
          <div className="flex-grow-2"></div>
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
            link="https://calendar.google.com/calendar/u/0/appointments/AcZssZ1eB8RwFR4X3gqAJRGBFG18VLTl87iCRz94200="
            title="Me contacter ou prendre un rendez-vous"
            analyticsEvent="rdv-ou-contact"
          >
            <div className="d-flex flex-column align-items-center">
              <span>Prendre un rendez-vous</span>
            </div>
          </OpenExternalLinkButton>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

LandingPage.displayName = 'LandingPage';
