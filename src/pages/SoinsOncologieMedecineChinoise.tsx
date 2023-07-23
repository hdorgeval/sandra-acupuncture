import { FC } from 'react';
import { Link } from 'react-router-dom';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const SoinsOncologieMedecineChinoise: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/soins-oncologie-medecine-chinoise-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="27%"
        backgroundPositionY="33%"
        htmlTitle={`Soins oncologie | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>L'Oncologie</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
            <p className="">
              L'énergétique traditionnelle chinoise est bénéfique pour soulager certains effets
              secondaires du cancer et de ses traitements.
            </p>
            <p className="">
              <span className="text-info">Nausées et vomissements :</span> En stimulant certains
              points appropriés, notamment le point "Neiguan" situé sur l'avant-bras, les nausées et
              les vomissements associés aux traitements tels que la chimiothérapie seront fortement
              diminués.
            </p>

            <p className="">
              <span className="text-info">Fatigue :</span> La fatigue est un effet secondaire
              courant du cancer et de ses traitements. Grâce à la stimulation de la circulation
              énergétique dans le corps qui favorise ainsi une augmentation de la vitalité, on
              observe une réduction de la fatigue. La récupération du corps est ainsi nettement
              rétablie.
            </p>
            <p className="">
              <span className="text-info">Douleurs :</span> Les douleurs associées au cancer, telles
              que les douleurs musculaires, les douleurs articulaires ou les douleurs
              neuropathiques, peuvent être soulagées par l'énergétique traditionnelle chinoise. La
              libération de différentes hormones comme les endorphines naturelles, réduit
              l'inflammation et détend les muscles, ce qui peut atténuer les douleurs.
            </p>
            <p className="">
              <span className="text-info">Anxiété et stress :</span> Le point "Yintang" situé entre
              les sourcils, en synergie avec d'autres points favorise la relaxation, calme le
              système nerveux et procure un sentiment de bien-être. Ainsi, on peut diminuer
              l'anxiété et le stress liés au diagnostic et au traitement du cancer.
            </p>
            <p className="">
              <span className="text-info">Troubles du sommeil :</span> Les troubles du sommeil sont
              fréquents chez les personnes atteintes de cancer. En agissant sur la détente du corps,
              et en calmant l'esprit on améliore ainsi la qualité du sommeil. La sensation de
              relaxation facilite l'endormissement.
            </p>

            <p className="">
              Il est important de souligner que l'énergétique traditionnelle chinoise ne remplace
              pas les traitements médicaux conventionnels du cancer, mais peut être utilisée en
              complément pour aider à soulager certains effets secondaires et à améliorer la qualité
              de vie.
            </p>

            <p className="mb-0 pb-0">
              Je fais une évaluation personnalisée et des recommandations adaptées à votre situation
              spécifique pour une approche sécuritaire.
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

SoinsOncologieMedecineChinoise.displayName = 'SoinsOncologieMedecineChinoise';
