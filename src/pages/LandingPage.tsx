import { FC } from 'react';
import { Link } from 'react-router-dom';
import portrait2 from '../assets/portrait2.png';
import { FiveStarRating } from '../components/FiveStarRating';
import { OneLetterPill } from '../components/OneLetterPill';
import { Question } from '../components/Question';
import { Quote } from '../components/Quote';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
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
            <PageTitle className="font-mali">Besoin de soulager votre corps</PageTitle>
            <PageTitle className="font-mali">Besoin d'avoir plus d'énergie</PageTitle>
            <PageTitle className="font-mali mt-4">
              Avec l'Énergétique Traditionnelle Chinoise
            </PageTitle>
          </div>
          <div className="flex-grow-third"></div>
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
                  9h à 19h. Praticienne en énergétique traditionnelle chinoise, je suis à votre
                  écoute pour vous apporter le soulagement et l'harmonie dont vous avez besoin par
                  les techniques d'acupuncture et par des massages TuiNa et tantrique.
                </AnimatedBy.Description>
              </AnimatedBy>

              <Link
                to="/qui-suis-je"
                className="text-decoration-none text-light"
                title="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
                aria-label="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
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
                sentence="L'OMS (Organisation Mondiale de la Santé) reconnaît l'énergétique traditionnelle
                chinoise comme une approche de traitement efficace pour un large éventail de
                problèmes de santé."
                answer="L'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements
                médicaux traditionnels."
                answerClassname="text-white"
              />
              <Link
                to="/acupuncture"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
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
                sentence="Vous avez des douleurs ou des migraines recurrentes ?"
                answer="Vous étes au bon endroit : l'énergétique traditionnelle chinoise peut vous aider"
                answerClassname="text-white"
              />
              <Link
                to="/soins-douleur-medecine-chinoise"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager mes douleurs ou mes migraines"
                aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager mes douleurs ou mes migraines"
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
                answer="Vous étes au bon endroit : l'énergétique traditionnelle chinoise peut vous aider"
                answerClassname="text-white"
              />
              <Link
                to="/soins-urogenitale-medecine-chinoise"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les troubles uro-génitaux"
                aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les troubles uro-génitaux"
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
                sentence="Vous voulez soulager les effets secondaires de votre traitement contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit ?"
                answer="Vous étes au bon endroit : l'énergétique traditionnelle chinoise peut vous aider"
                answerClassname="text-white"
              />
              <Link
                to="/soins-oncologie-medecine-chinoise"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les effets secondaires des traitements contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit"
                aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les effets secondaires des traitements contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit"
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
                sentence="Vous voulez redonner de l'éclat à votre visage ?"
                answer="Vous étes au bon endroit : l'aculifting vous permet de rajeunir naturellement votre peau"
                answerClassname="text-white"
              />
              <Link
                to="/aculifting"
                className="text-decoration-none text-light"
                title="En savoir plus sur comment l'aculifting peut vous aider à rajeunir naturellement votre peau en lui donnant plus d'éclat et plus de fermeté."
                aria-label="En savoir plus sur comment l'aculifting peut vous aider à rajeunir naturellement votre peau en lui donnant plus d'éclat et plus de fermeté."
              >
                <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                  En savoir plus
                </span>
              </Link>
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>I</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Isabelle Jossot</div>
                <div>
                  <FiveStarRating />
                </div>
                <ReadMoreReadLess
                  height={'17vh'}
                  readMoreText={'Lire plus'}
                  readLessText={'Lire moins'}
                >
                  Je tiens à remercier Sandra tant pour son écoute que pour son professionnalisme.
                  Je l'ai consulter en acupuncture pour une problématique récurrente qui enfin, est
                  en passe d'être réglée définitivement. Et j'ai pu également expérimenter les
                  massages qu'elle propose... que de la douceur.... du pur bonheur ! Un grand Merci
                </ReadMoreReadLess>
              </div>
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>S</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Sophie Violeau</div>
                <div>
                  <FiveStarRating />
                </div>
                <ReadMoreReadLess
                  height={'17vh'}
                  readMoreText={'Lire plus'}
                  readLessText={'Lire moins'}
                >
                  J'ai effectué 2 séances d'acupuncture avec Sandra afin de régler des problèmes
                  liés à la pré-ménopause. Elle a su me rassurer et m'a mise en confiance Elle a
                  réalisé les soins tout en douceur. Ceux-ci ont été efficace et m'ont réellement
                  soulagé Merci pour tout Sandra
                </ReadMoreReadLess>
              </div>
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>L</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Lolote Foucher</div>
                <div>
                  <FiveStarRating />
                </div>
                <ReadMoreReadLess
                  height={'17vh'}
                  readMoreText={'Lire plus'}
                  readLessText={'Lire moins'}
                >
                  J'ai pu essayé le massage qui est extraordinaire au niveau des sensations...plein
                  d'émotions Un lâcher prise d'une heure et demi !!!
                </ReadMoreReadLess>
              </div>
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
