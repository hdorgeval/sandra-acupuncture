import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Description } from '../components/Description';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const AculiftingDetails: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/backgrounds/aculifting.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="43%"
        backgroundPositionY="33%"
        htmlTitle={`Aculifting en détails | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Aculifting</PageTitle>
          </div>
          <div className="" style={{ minHeight: '5vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-5 font-monserrat px-4 py-4">
            <Description>
              L'aculifting, également connu sous le nom d'acupuncture esthétique ou acupuncture
              faciale, est une technique qui vise à rajeunir et à revitaliser le visage en utilisant
              des principes de l'acupuncture traditionnelle chinoise. Il s'agit d'une approche
              naturelle et non chirurgicale pour améliorer l'apparence et favoriser la santé de la
              peau du visage. L'aculifting consiste à stimuler des points d'acupuncture spécifiques
              du visage à l'aide de fines aiguilles ou parfois par la pression des doigts
              (acupression) pour favoriser la circulation sanguine, stimuler la production de
              collagène et d'élastine, ainsi que pour équilibrer l'énergie vitale du corps.
            </Description>

            <p className="">Les avantages potentiels de l'aculifting incluent :</p>
            <p className="">
              <span className="fs-4 fw-bolder">Raffermissement de la peau :</span> L'aculifting peut
              aider à tonifier et à raffermir la peau en stimulant les fibroblastes, qui sont les
              cellules responsables de la production de collagène et d'élastine, essentiels à la
              fermeté et à l'élasticité de la peau.
            </p>
            <p className="">
              <span className="fs-4 fw-bolder">Réduction des rides et des ridules :</span> En
              stimulant les points d'acupuncture spécifiques du visage, l'aculifting peut aider à
              atténuer les rides et les ridules en améliorant la régénération cellulaire et la
              circulation sanguine, ce qui peut favoriser une apparence plus lisse et plus jeune.
            </p>
            <p>
              <span className="fs-4 fw-bolder">Amélioration de la circulation sanguine :</span>{' '}
              L'aculifting peut augmenter la circulation sanguine dans la région du visage, ce qui
              permet de mieux nourrir les tissus cutanés, d'éliminer les toxines et de favoriser une
              peau plus lumineuse et revitalisée.
            </p>
            <p>
              <span className="fs-4 fw-bolder">
                Réduction des poches et des cernes sous les yeux :
              </span>{' '}
              L'aculifting peut aider à réduire l'apparence des poches et des cernes sous les yeux
              en améliorant le drainage lymphatique et en favorisant l'élimination des fluides et
              des toxines accumulés dans la région.
            </p>
            <p>
              <span className="fs-4 fw-bolder">Relaxation et réduction du stress facial :</span> Les
              séances d'aculifting peuvent être relaxantes et apaisantes pour le visage, aidant
              ainsi à réduire les tensions musculaires, les crispations et le stress accumulés, ce
              qui peut contribuer à une apparence plus détendue et équilibrée.
            </p>

            <p className="mb-0 pb-0">
              Il est important de souligner que l'aculifting ne produit pas des résultats
              spectaculaires ou immédiats comme une intervention chirurgicale, mais il peut offrir
              des améliorations subtiles et naturelles au fil du temps. La durée et la fréquence des
              séances peuvent varier en fonction des besoins individuels. Je fais une évaluation
              personnalisée et des recommandations adaptées à votre situation spécifique pour
              obtenir les meilleurs résultats.
            </p>
            <div className="d-flex flex-column align-items-center pt-4">
              <Link to="/aculifting">
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

AculiftingDetails.displayName = 'AculiftingDetails';
