import { FC } from 'react';
import { Description } from '../components/Description';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const QuiSuisJe: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/qui-suis-je-background.webp"
        backgroundOverlay="linear-gradient(rgba(0, 0, 0, 0.1), rgb(127, 58, 35, 0.61))"
        backgroundPositionX="50%"
        backgroundPositionY="0%"
        backgroundColor="#a1b411"
        backgroundSize="contain"
        htmlTitle={`Qui-suis je? | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Qui suis-je ?</PageTitle>
          </div>
          <div className="" style={{ minHeight: '38vh' }}></div>
          <SemiTransparentTile
            background="linear-gradient(rgb(8, 49, 14, 0.6), rgba(79, 79, 93, 0.3))"
            className="card text-start text-light fs-1 font-dancing-script px-4 py-4"
          >
            <p className="">Bonjour !</p>
            <p className="">Je suis Sandra Giraudeau.</p>
            <Description>
              Je vous propose une approche holistique de la santé et du bien-être avec l'énergétique
              traditionnelle chinoise, l'aculifting, le massage Tuina, et le massage tantrique.
              Passionnée par l'art ancestral de l'énergétique traditionnelle chinoise, j'ai consacré
              des années d'études et de pratiques pour maîtriser ces différentes techniques et
              contribuer à la santé et au bien-être. Avec une solide formation et une riche
              expérience, je vous propose un accompagnement personnalisé vers une harmonie totale du
              corps, de l'esprit et de l'être. Grâce à l' énergétique traditionnelle chinoise,
              j'utilise des principes millénaires pour évaluer l'équilibre énergétique de votre
              corps. En combinant la théorie des méridiens, des cinq éléments, du yin du yang je
              cherche à rétablir l'harmonie des flux d'énergie pour agir sur les troubles
              émotionnels et physiques. Avec l'aculifting, je vous propose une approche naturelle
              pour améliorer votre apparence. Grâce à des techniques spécifiques des points faciaux,
              l'aculifting a pour objectif de réduire les rides, améliorer l'élasticité de la peau,
              faire circuler l'énergie et révéler votre éclat naturel. Je propose le massage Tuina,
              un des piliers de l' énergétique traditionnelle chinoise. En utilisant des mouvements
              spécifiques et une pression adaptée le long des méridiens, le massage Tuina favorise
              la circulation de l'énergie, soulage les tensions musculaires, améliore la mobilité
              articulaire et procure une profonde détente. Je le pratique lors des séances
              d'énergétique traditionnelle chinoise. Puis j'ai découvert l'univers du tantra, j'ai
              observé à quel point l'approche du corps par le massage tantrique était puissante,
              réparatrice et transformatrice. Ce massage holistique vise à éveiller notre énergie
              vitale et à favoriser une connexion à notre essence profonde. Ce voyage intérieur vous
              invite à explorer votre sensorialité, à libérer les blocages émotionnels pour
              atteindre un état de plénitude et d'épanouissement de votre être. Que vous cherchiez à
              soulager des douleurs, à réduire le stress, à améliorer votre apparence ou à vous
              rencontrer, je vous accueille avec bienveillance et professionnalisme. Chaque séance
              est adaptée à vos besoins spécifiques, dans un cadre chaleureux et respectueux, pour
              améliorer votre santé et votre qualité de vie
            </Description>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
