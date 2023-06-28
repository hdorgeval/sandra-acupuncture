import { FC } from 'react';
import { Link } from 'react-router-dom';
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
        backgroundPositionX="74%"
        backgroundPositionY="42%"
        htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}
      >
        <div
          className="d-flex flex-column justify-content-start align-items-center"
          style={{ height: '100vh', minHeight: '100vh' }}
        >
          <div className="flex-grow-half"></div>
          <div className="mt-0">
            <PageTitle className="font-mali">Envie de soulager votre corps ?</PageTitle>
            <PageTitle className="font-mali">Envie de plus d'énergie ?</PageTitle>
            <PageTitle className="font-mali">Envie de Médecine Traditionnelle Chinoise ?</PageTitle>
          </div>
          <div id="home" className="w-100">
            <a
              className="btn btn-outline-light fw-bolder w-75 mt-4 font-dancing-script fs-big-1"
              href="#bienvenue"
            >
              Bienvenue !
            </a>
          </div>
        </div>
        <div data-bs-target="#home" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabIndex={0}>
          <h4 id="bienvenue" data-bs-smooth-scroll="true"></h4>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Quote
                sentence="J'ai besoin de soulager des douleurs ou des migraines"
                author="L'acupuncture peut m'aider"
              />
              <Link
                to="/foobar"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'acupuncture peut soulager mes douleurs"
                aria-label="En savoir plus sur comment l'acupuncture peut soulager mes douleurs"
              >
                <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                  En savoir plus
                </span>
              </Link>
            </div>
          </SemiTransparentTile>
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
