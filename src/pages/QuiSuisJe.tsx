import { FC } from 'react';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/qui-suis-je-background.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPosition="33%"
        htmlTitle={`Qui-suis je? | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Qui suis-je ?</PageTitle>
          </div>
          <div className="" style={{ minHeight: '30vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-dancing-script px-4 py-4">
            <p className="">Bonjour !</p>
            <p className="">Je m'appelle Sandra Giraudeau.</p>
            <p className="">
              Je vous propose une approche holistique de la santé et du bien-être avec la médecine
              énergétique chinoise, l'acupression, l'aculifting, le massage Tuina et le massage
              tantrique.
            </p>
            <p className="">
              Passionnée par l'art ancestral de la médecine énergétique chinoise, j'ai consacré des
              années d'études et de pratique pour maîtriser ces différentes techniques
              thérapeutiques. Avec une solide formation et une riche expérience, je vous propose un
              accompagnement personnalisé vers une harmonie totale du corps, de l'esprit et de
              l'âme.
            </p>
            <p className="">
              Grâce à la médecine énergétique chinoise, j'utilise des principes millénaires pour
              évaluer l'équilibre énergétique de votre corps. En combinant la théorie des méridiens,
              des points d'acupuncture et des techniques d'acupression, je cherche à rétablir
              l'harmonie des flux d'énergie pour favoriser la guérison et la vitalité.
            </p>
            <p>
              Avec l'aculifting, je vous propose une approche naturelle pour rajeunir votre visage
              et améliorer votre apparence. Grâce à des techniques spécifiques d'acupression et de
              stimulation des points faciaux, l'aculifting vise à réduire les rides, à améliorer
              l'élasticité de la peau et à révéler votre éclat naturel.
            </p>
            <p>
              Je propose Le massage Tuina, une pratique thérapeutique traditionnelle chinoise. En
              utilisant des mouvements spécifiques et une pression adaptée le long des méridiens, le
              massage Tuina favorise la circulation de l'énergie, soulage les tensions musculaires,
              améliore la mobilité articulaire et procure une profonde détente.
            </p>
            <p>
              J'offre également des séances de massage tantrique, une approche sensuelle et
              spirituelle qui vise à éveiller votre énergie vitale et à favoriser une connexion
              profonde avec votre être intérieur. Ce massage holistique vous invite à explorer votre
              sensualité, à libérer les blocages émotionnels et à atteindre un état de plénitude et
              d'épanouissement.
            </p>
            <p>
              Que vous cherchiez à soulager des douleurs, à réduire le stress, à améliorer votre
              apparence ou à explorer votre potentiel sensuel, je vous accueille avec bienveillance
              et professionnalisme. Chaque séance est adaptée à vos besoins spécifiques, dans un
              cadre chaleureux et respectueux, pour vous offrir une expérience thérapeutique unique
              et transformative.
            </p>
            <p>
              Je vous invite à plongez dans le monde de la médecine énergétique chinoise, de
              l'acupression, de l'aculifting, du massage Tuina et du massage tantrique.
            </p>
            <p className="mb-0 pb-0">
              Rétablissez l'harmonie dans votre être tout entier et embrassez une vie épanouissante
              emplie de santé, de vitalité et de bien-être.
            </p>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
