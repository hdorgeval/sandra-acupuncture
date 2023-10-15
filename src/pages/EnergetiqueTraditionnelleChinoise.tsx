import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Description } from '../components/Description';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const EnergetiqueTraditionnelleChinoise: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/soins-urogenitale-medecine-chinoise-background.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="27%"
        backgroundPositionY="33%"
        htmlTitle={`Énergétique Traditionnelle Chinoise | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Énergétique Traditionnelle Chinoise</PageTitle>
          </div>
          <div className="" style={{ minHeight: '5vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-5 font-monserrat px-4 py-4">
            <Description>
              L'Energétique traditionnelle chinoise est une pratique millénaire. Elle repose sur la
              connaissance du réseau énergétique parcourant tout le corps, connu sous le nom de Qi
              (ou Chi), qui circule le long de canaux spécifiques appelés méridiens. Son approche
              prend en compte l'individu dans sa globalité. Le corps et l'esprit son interconnectés
              et ne peuvent être considérés de manière isolée. Les symptômes physiques, mais aussi
              l'état émotionnel, le mode de vie, l'environnent sont abordés pour comprendre comment
              différents facteurs peuvent influencer la santé et le bien-être de la personne.
              L'objectif est de traiter la cause profonde des problèmes de santé et de promouvoir le
              bien-être global de la personne. Les points d'acupuncture le long des méridiens sont
              considérés comme des points d'accès pour réguler le flux du Qi (ou énergie vitale) et
              ainsi rétablir l'harmonie du corps. Leur stimulation permet de rétablir les bonnes
              hormones, corriger le système immunitaire, favoriser l'autoréparation du corps via les
              cellules souches. L'énergétique traditionnelle chinoise s'applique en tant que méthode
              préventive ou curative.
            </Description>

            <p className="">
              Les domaines d'application de l'énergétique traditionnelle chinoise incluent :
            </p>
            <p className="" id="soulagement-de-la-douleur">
              <span className="fs-4 fw-bolder">Le soulagement de la douleur :</span> L'énergétique
              traditionnelle chinoise soulage la douleur en stimulant le système nerveux et en
              libérant des substances chimiques naturelles dans le corps qui ont des effets
              analgésiques et anti-inflammatoires.
            </p>
            <p>
              Les maux de dos, les douleurs musculaires et articulaires, les tendinites, les
              épicondylites, les bursites, les capsulites, les sciatiques, les cervicalgies, les
              maux de tête sont ainsi traités.
            </p>
            <p id="reduction-stress-et-anxiete">
              <span className="fs-4 fw-bolder">La réduction du stress et de l'anxiété :</span> En
              favorisant la relaxation et en aidant à équilibrer les hormones du stress.
            </p>
            <p>
              Voici comment l'énergétique Traditionnelle Chinoise va favoriser une sensation de
              calme et de bien-être :
            </p>
            <p className="ps-4">
              <i className="bi bi-dash"></i>
              En stimulant le système parasympathique, responsable de la relaxation et de la réponse
              de détente du corps.
            </p>
            <p className="ps-4">
              <i className="bi bi-dash"></i>
              En libérant des endorphines, qui sont des hormones naturelles ayant des effets
              analgésiques et antidépresseurs.
            </p>
            <p className="ps-4">
              <i className="bi bi-dash"></i>
              En régulant les niveaux des hormones du stress comme le cortisol.
            </p>
            <p id="amelioration-du-sommeil">
              <span className="fs-4 fw-bolder">L'amélioration du sommeil :</span> Les troubles du
              sommeil sont souvent considérés comme étant liée à un déséquilibre du Shen,
              c'est-à-dire de l'esprit, qui est directement associé au Coeur.
            </p>
            <p>
              En énergétique traditionnelle chinoise, le coeur englobe un concept plus large qui
              inclut les fonctions mentales et émotionnelles. En agissant entre autres sur le
              méridien du Coeur pour réguler le flux du Qi (énergie) et du sang l'esprit devient
              plus calme et la qualité du sommeil s'améliore.
            </p>
            <p id="renforcement-du-systeme-immunitaire">
              <span className="fs-4 fw-bolder">Le renforcement du système immunitaire :</span> En
              énergétique traditionnelle chinoise, le système immunitaire correspond au wei Qi, ou
              énergie défensive que chacun possède.
            </p>
            <p>
              Il nous protège des invasions externes de type vent, froid, humidité et chaleur. Les
              méridiens de la rate, du rein et du poumon sont efficaces pour activer la production
              des cellules du système immunitaire aidant ainsi à prévenir les maladies et à
              favoriser la santé globale en cas de sinusite, bronchite, asthme.
            </p>
            <p id="regulation-des-desequilibres-hormonaux">
              <span className="fs-4 fw-bolder">La régulation des déséquilibres hormonaux :</span>{' '}
              L'énergétique traditionnelle chinoise est souvent utilisée pour traiter les
              déséquilibres hormonaux chez les femmes, tels que les troubles menstruels, les
              symptômes de la ménopause, l'endométriose et les troubles de la fertilité.
            </p>
            <p id="amelioration-de-la-digestion">
              <span className="fs-4 fw-bolder">L'amélioration de la digestion :</span> En agissant
              sur la libération des hormones digestives qui sont impliquées dans la régulation du
              processus de digestion et de l'absorption des nutriments, l'énergétique traditionnelle
              chinoise contribue au bon fonctionnement du système digestif.
            </p>
            <p>
              Les ballonnements, les reflux acides, les nausées et les douleurs abdominales sont
              ainsi soulagés tout comme la diarrhée, la constipation, la digestion difficile. Les
              problèmes de poids sont aussi abordés.
            </p>
            <p id="augmentation-de-l-energie">
              <span className="fs-4 fw-bolder">L'augmentation de l'énergie :</span> En rééquilibrant
              les flux d'énergie du corps, l'énergétique traditionnelle chinoise stimule et
              revitalise le système énergétique, améliorant ainsi les niveaux d'énergie et réduisant
              la fatigue.
            </p>
            <p id="soutien-aux-soins-de-la-peau">
              <span className="fs-4 fw-bolder">Le soutien aux soins de la peau :</span>{' '}
              L'énergétique traditionnelle chinoise est souvent utilisée en esthétique pour aider à
              améliorer la santé de la peau, en favorisant l'éclat naturel, en réduisant les rides
              et en agissant sur les problèmes cutanés tels que l'acné, l'eczéma, le psoriasis.
            </p>
            <p id="gestion-des-dependances">
              <span className="fs-4 fw-bolder">La gestion des dépendances :</span> L'énergétique
              traditionnelle chinoise peut être utilisée dans la gestion des dépendances, en aidant
              à réduire les symptômes de sevrage et à soutenir le processus de désintoxication à
              l'alcool, le tabac, la drogue.
            </p>
            <p id="traitement-adapte-a-l-enfant">
              <span className="fs-4 fw-bolder">Traitements adaptés à l'enfant :</span> Les
              traitements de l'énergétique traditionnelle chinoise pour les enfants sont
              généralement adaptés à leur âge et à leur constitution. L'ensemble du tableau de santé
              de l'enfant, y compris les symptômes, l'état émotionnel, les habitudes alimentaires et
              le mode de vie seront pris en compte pour répondre à ses besoins.
            </p>
            <p id="cancerologie">
              <span className="fs-4 fw-bolder">La cancérologie :</span> L'énergétique traditionnelle
              chinoise est un traitement d'appoint dans tous les cancers, préparation avant les
              examens, avant la chimiothérapie, la chirurgie, la radiothérapie, aide à la
              récupération après les traitements.
            </p>
            <p>
              L'énergétique traditionnelle chinoise ne remplace pas les traitements médicaux
              conventionnels, en particulier dans les cas de maladies graves. Il est donc essentiel
              de consulter un professionnel de la santé qualifié pour un diagnostic précis et un
              traitement approprié.
            </p>
            <p className="mb-0 pb-0">
              L'Organisation Mondiale de la Santé (OMS) reconnaît l'énergétique traditionnelle
              chinoise comme une approche de traitement efficace pour un large éventail de problèmes
              de santé. Elle peut être utilisée en complément d'autres traitements médicaux
              traditionnels. Les effets de l'énergétique traditionnelle chinoise peuvent varier
              d'une personne à l'autre, et l'approche de traitement doit être adaptée aux besoins
              individuels de chaque patient.
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

EnergetiqueTraditionnelleChinoise.displayName = 'EnergetiqueTraditionnelleChinoise';
