import { FC } from 'react';
import { Link } from 'react-router-dom';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const SoinsDouleurMedecineChinoise: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/soins-douleur-medecine-chinoise-background.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Soins douleur | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Soulagement de la douleur</PageTitle>
          </div>
          <div className="" style={{ minHeight: '5vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-5 font-monserrat px-4 py-4">
            <p className="">
              L'énergétique traditionnelle chinoise est souvent utilisée pour soulager divers types
              de douleurs, comme les maux de dos, les douleurs musculaires, les migraines, les
              entorses, les sciatiques et les douleurs articulaires.
            </p>
            <p>
              Elle stimule la libération de certaines hormones comme les endorphines, les
              analgésiques naturels du corps.
            </p>
            <p className="">
              L'ocytocine, la sérotonine, les endorphines et bien d'autres hormones sont libérées
              grâce aux bienfaits de l'énergétique traditionnelle chinoise.
            </p>
            <p>
              Tous les mécanismes naturels de soulagement de la douleur du corps sont ainsi activés.
              Cette stimulation aide à débloquer les tensions et à favoriser la circulation sanguine
              et lymphatique ce qui réduit la douleur.
            </p>

            <p className="">
              Les tensions, les spasmes musculaires sont nettement atténués grâce à la détente
              musculaire qui s'installe dans le corps.
            </p>
            <p className="">
              En résumé, une sensation de bien-être et de soulagement s'opère dans le corps.
            </p>
            <p>
              Certains points d'acupuncture sont connus pour leur efficacité dans le soulagement de
              douleurs spécifiques.
            </p>
            <p>
              Par exemple, le point "Hegu" entre le pouce et l'index peut être pressé pour soulager
              les maux de tête et les douleurs faciales.
            </p>

            <p className="mb-0 pb-0">
              Il est important de noter que l'énergétique traditionnelle chinoise peut offrir un
              soulagement temporaire de la douleur, mais elle ne traite pas la cause sous-jacente de
              la douleur. Si vous avez des douleurs chroniques ou graves, il est recommandé de
              consulter un professionnel de la santé pour obtenir un diagnostic approprié et un plan
              de traitement complet.
            </p>
            <div className="d-flex flex-column align-items-center pt-4">
              <Link to="/acupuncture">
                <span className="badge rounded-pill text-bg-dark border border-secondary m-1">
                  Déroulement et tarifs
                </span>
              </Link>
            </div>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

SoinsDouleurMedecineChinoise.displayName = 'SoinsDouleurMedecineChinoise';
