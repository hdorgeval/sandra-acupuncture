import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const SoinsUroGenitaleMedecineChinoise: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/soins-urogenitale-medecine-chinoise-background.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="27%"
        backgroundPositionY="33%"
        htmlTitle={`Soins uro-génital | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Traitement de la sphère urogénitale</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
            <p className="">
              L'énergétique traditionnelle chinoise peut être bénéfique pour soulager plusieurs
              symptômes liés aux règles douloureuses, aux troubles de la ménopause, aux bouffées de
              chaleur et à la libido.
            </p>
            <p>
              Voici comment l'énergétique traditionnelle chinoise peut aider dans ces domaines :
            </p>
            <p className="">
              <span className="text-info">Règles douloureuses :</span> En ciblant certains points
              d'acupression, notamment ceux liés au système reproducteur, l'énergétique
              traditionnelle chinoise peut aider à soulager les crampes menstruelles et les douleurs
              associées. La stimulation de ces points peut favoriser la circulation sanguine dans la
              région pelvienne, détendre les muscles et atténuer les sensations de douleur.
            </p>

            <p className="">
              <span className="text-info">Troubles de la ménopause :</span> L'énergétique
              traditionnelle chinoise peut être utilisée pour atténuer les symptômes de la ménopause
              tels que les bouffées de chaleur, les sueurs nocturnes, les troubles du sommeil et les
              déséquilibres hormonaux. En stimulant les points d'acupression appropriés,
              l'énergétique traditionnelle chinoise peut aider à réguler les hormones, à calmer le
              système nerveux et à améliorer le bien-être général.
            </p>
            <p className="">
              <span className="text-info">Bouffées de chaleur :</span> Les bouffées de chaleur sont
              souvent associées à la ménopause, mais peuvent également être présentes dans d'autres
              situations. L'énergétique traditionnelle chinoise peut aider à réduire l'intensité et
              la fréquence des bouffées de chaleur en équilibrant l'énergie dans le corps et en
              favorisant une meilleure circulation. Certains points d'acupression ciblent
              spécifiquement les bouffées de chaleur et peuvent apporter un soulagement
              significatif.
            </p>
            <p className="">
              <span className="text-info">Libido :</span> L'énergétique traditionnelle chinoise peut
              être utilisée pour stimuler la libido en agissant sur les points d'acupression liés à
              la sexualité et à la vitalité. La stimulation de ces points peut améliorer la
              circulation sanguine dans la région pelvienne, équilibrer les hormones sexuelles et
              favoriser une sensation accrue de désir.
            </p>

            <p className="mb-0 pb-0">
              Il est important de noter que chaque personne est unique et que les résultats de
              l'énergétique traditionnelle chinoise peuvent varier. Je fais une évaluation
              personnalisée et des recommandations adaptées à votre situation spécifique.
              L'énergétique traditionnelle chinoise peut être utilisée en complément d'autres
              approches médicales ou thérapeutiques pour améliorer votre bien-être général.
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

SoinsUroGenitaleMedecineChinoise.displayName = 'SoinsUroGenitaleMedecineChinoise';
