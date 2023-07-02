import { FC } from 'react';
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
        backgroundPosition="33%"
        htmlTitle={`Qui-suis je? | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Soulagement de la douleur</PageTitle>
          </div>
          <div className="" style={{ minHeight: '30vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-dancing-script px-4 py-4">
            <p className="">
              La médecine énergétique chinoise est souvent utilisée pour soulager divers types de
              douleurs, comme les maux de dos, les douleurs musculaires, les migraines, les
              entorses, les sciatiques et les douleurs articulaires. Elle stimule la libération
              d'endorphines, les analgésiques naturels du corps.
            </p>
            <p className="">
              En appliquant une pression sur des points spécifiques, l'acupression peut activer les
              mécanismes naturels de soulagement de la douleur du corps. Cette stimulation aide à
              débloquer les tensions et à favoriser la circulation sanguine, ce qui peut réduire la
              douleur.
            </p>

            <p className="">
              L'acupression peut stimuler la libération d'endorphines, qui sont des substances
              chimiques naturelles produites par le corps et agissant comme des analgésiques
              naturels. Les endorphines aident à réduire la douleur et peuvent induire une sensation
              de bien-être et de soulagement.
            </p>
            <p className="">
              L'acupression peut aider à réduire l'inflammation dans les tissus en améliorant la
              circulation sanguine et lymphatique. Une inflammation réduite peut soulager la douleur
              associée à des affections telles que l'arthrite, les entorses, les tendinites, etc.
            </p>
            <p className="">
              L'acupression favorise la détente musculaire en réduisant les tensions et les spasmes
              musculaires. Cela peut être particulièrement bénéfique pour soulager les douleurs
              musculaires, les tensions du dos, les migraines d'origine musculaire, etc.
            </p>
            <p>
              Certains points d'acupuncture sont connus pour leur efficacité dans le soulagement de
              douleurs spécifiques. Par exemple, le point "Hegu" entre le pouce et l'index peut être
              pressé pour soulager les maux de tête et les douleurs faciales.
            </p>

            <p className="mb-0 pb-0">
              Il est important de noter que l'acupression peut offrir un soulagement temporaire de
              la douleur, mais elle ne traite pas la cause sous-jacente de la douleur. Si vous avez
              des douleurs chroniques ou graves, il est recommandé de consulter un professionnel de
              la santé pour obtenir un diagnostic approprié et un plan de traitement complet.
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

SoinsDouleurMedecineChinoise.displayName = 'SoinsDouleurMedecineChinoise';
