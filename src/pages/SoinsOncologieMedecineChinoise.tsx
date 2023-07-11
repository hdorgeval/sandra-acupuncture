import { FC } from 'react';
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
              L'acupression peut être bénéfique pour soulager certains effets secondaires du cancer
              et de ses traitements.
            </p>
            <p className="">
              <span className="text-info">Nausées et vomissements :</span> L'acupression peut être
              utilisée pour soulager les nausées et les vomissements associés aux traitements tels
              que la chimiothérapie. En stimulant les points d'acupression appropriés, notamment le
              point "Neiguan" situé sur l'avant-bras, l'acupression peut réduire ces symptômes et
              favoriser un soulagement.
            </p>

            <p className="">
              <span className="text-info">Fatigue :</span> La fatigue est un effet secondaire
              courant du cancer et de ses traitements. L'acupression peut aider à stimuler l'énergie
              vitale du corps, favorisant ainsi une augmentation de la vitalité et une réduction de
              la fatigue. Certains points d'acupression spécifiques peuvent être utilisés pour
              renforcer le système énergétique et améliorer la récupération.
            </p>
            <p className="">
              <span className="text-info">Douleurs :</span> Les douleurs associées au cancer, telles
              que les douleurs musculaires, les douleurs articulaires ou les douleurs
              neuropathiques, peuvent être soulagées par l'acupression. En ciblant les points
              d'acupression appropriés, l'acupression peut stimuler la libération d'endorphines
              naturelles, réduire l'inflammation et détendre les muscles, ce qui peut atténuer les
              douleurs.
            </p>
            <p className="">
              <span className="text-info">Anxiété et stress :</span> L'acupression peut aider à
              réduire l'anxiété et le stress liés au diagnostic et au traitement du cancer. En
              stimulant certains points d'acupression, notamment le point "Yintang" situé entre les
              sourcils, l'acupression peut favoriser la relaxation, calmer le système nerveux et
              promouvoir un sentiment de bien-être.
            </p>
            <p className="">
              <span className="text-info">Troubles du sommeil :</span> Les troubles du sommeil sont
              fréquents chez les personnes atteintes de cancer. L'acupression peut être utilisée
              pour favoriser un sommeil réparateur en détendant le corps, en calmant l'esprit et en
              améliorant la qualité du sommeil. Des points d'acupression spécifiques peuvent être
              stimulés pour induire une sensation de relaxation et faciliter l'endormissement.
            </p>

            <p className="mb-0 pb-0">
              Il est important de souligner que l'acupression ne remplace pas les traitements
              médicaux conventionnels du cancer, mais peut être utilisée en complément pour aider à
              soulager certains effets secondaires et à améliorer la qualité de vie. Je fais une
              évaluation personnalisée et des recommandations adaptées à votre situation spécifique
              pour une approche sécuritaire.
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

SoinsOncologieMedecineChinoise.displayName = 'SoinsOncologieMedecineChinoise';
