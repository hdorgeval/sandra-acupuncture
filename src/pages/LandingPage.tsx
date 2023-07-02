import { FC } from 'react';
import { Link } from 'react-router-dom';
import portrait2 from '../assets/portrait2.png';
import { Question } from '../components/Question';
import { Quote } from '../components/Quote';
import { websiteConfig } from '../website.config';
import { AnimatedBy } from './page-layout/AnimatedBy';
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
            <PageTitle className="font-mali">Soulager votre corps</PageTitle>
            <PageTitle className="font-mali">Avoir plus d'énergie</PageTitle>
            <PageTitle className="font-mali">Avec la Médecine Traditionnelle Chinoise</PageTitle>
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
        <div tabIndex={0} style={{ scrollBehavior: 'smooth' }}>
          <h4 id="bienvenue" className="pb-5"></h4>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body font-dancing-script fs-3">
              <AnimatedBy>
                <AnimatedBy.Img src={portrait2} />
                <AnimatedBy.FigCaption>Je m'appelle Sandra Giraudeau</AnimatedBy.FigCaption>
                <AnimatedBy.Description>
                  Je vous reçois dans mon cabinet situé au sud-ouest de Nantes du lundi au samedi de
                  9h à 19h. Praticienne en médecine énérgétique chinoise, je suis à votre écoute
                  pour vous apporter le soulagement et l'harmonie dont vous avez besoin par les
                  techniques d'acupression et par des massages TuiNa et tantrique.
                </AnimatedBy.Description>
              </AnimatedBy>

              <Link
                to="/qui-suis-je"
                className="text-decoration-none text-light"
                title="En savoir plus sur le monde de la médecine énergétique chinoise, de
              l'acupression, de l'aculifting, du massage Tuina et du massage tantrique"
                aria-label="En savoir plus sur le monde de la médecine énergétique chinoise, de
              l'acupression, de l'aculifting, du massage Tuina et du massage tantrique"
              >
                <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1 font-playfair">
                  En savoir plus
                </span>
              </Link>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Question
                sentence="Vous avez des douleurs ou des migraines recurrentes ?"
                answer="Vous étes au bon endroit : l'acupression peut vous aider"
                answerClassname="text-white"
              />
              <Link
                to="/soins-douleur-medecine-chinoise"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'acupression peut soulager mes douleurs ou mes migraines"
                aria-label="En savoir plus sur comment l'acupression peut soulager mes douleurs ou mes migraines"
              >
                <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                  En savoir plus
                </span>
              </Link>
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Question
                sentence="Règles douloureuses, troubles de la ménopause ?"
                answer="Vous étes au bon endroit : l'acupression peut vous aider"
                answerClassname="text-white"
              />
              <Link
                to="/foobar"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'acupression peut soulager les troubles uro-génitaux"
                aria-label="En savoir plus sur comment l'acupression peut soulager les troubles uro-génitaux"
              >
                <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                  En savoir plus
                </span>
              </Link>
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Question
                sentence="Vous voulez soulager les effets secondaires de votre traitement contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit."
                answer="Vous étes au bon endroit : l'acupression peut vous aider"
                answerClassname="text-white"
              />
              <Link
                to="/foobar"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'acupression peut soulager les effets secondaires des traitements contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit"
                aria-label="En savoir plus sur comment l'acupression peut soulager les effets secondaires des traitements contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit"
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
