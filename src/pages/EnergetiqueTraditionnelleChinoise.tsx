import { FC } from 'react';
import { Link } from 'react-router-dom';
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
        htmlTitle={`Soins uro-génital | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Énergétique Traditionnelle Chinoise</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
            <p className="">
              L'Energétique traditionnelle chinoise est une pratique millénaire. Elle repose sur la
              connaissance du réseau énergétique parcourant tout le corps, connu sous le nom de Qi
              (ou Chi), qui circule le long de canaux spécifiques appelés méridiens. Son approche
              prend en compte l'individu dans sa globalité.
            </p>
            <p className="">
              Le corps et l'esprit son interconnectés et ne peuvent être considérés de manière
              isolée.
            </p>
            <p>
              Les symptômes physiques, mais aussi l'état émotionnel, le mode de vie, l'environnent
              sont abordés pour comprendre comment différents facteurs peuvent influencer la santé
              et le bien-être de la personne.
            </p>
            <p>
              L'objectif est de traiter la cause profonde des problèmes de santé et de promouvoir le
              bien-être global de la personne.
            </p>
            <p>
              Les points d'acupuncture le long des méridiens sont considérés comme des points
              d'accès pour réguler le flux du Qi (ou énergie vitale) et ainsi rétablir l'harmonie du
              corps.
            </p>
            <p>
              Leur stimulation permet de rétablir les bonnes hormones, corriger le système
              immunitaire, favoriser l'autoréparation du corps via les cellules souches.
            </p>
            <p className="">
              L'énergétique traditionnelle chinoise s'applique en tant que méthode préventive ou
              curative.
            </p>

            <p className="">
              Les domaines d'application de l'énergétique traditionnelle chinoise incluent :
            </p>
            <p className="">
              <span className="text-info">Le soulagement de la douleur :</span> L'énergétique
              traditionnelle chinoise soulage la douleur en stimulant le système nerveux et en
              libérant des substances chimiques naturelles dans le corps qui ont des effets
              analgésiques et anti-inflammatoires.
            </p>
            <p>
              Les maux de dos, les douleurs musculaires et articulaires, les tendinites,
              épicondilytes, les sciatiques, les maux de tête sont ainsi traités.
            </p>
            <p>
              <span className="text-info">La réduction du stress et de l'anxiété :</span> En
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
            <p>
              <span className="text-info">L'amélioration du sommeil :</span> Les troubles du sommeil
              sont souvent considérés comme étant liée à un déséquilibre du Shen, c'est-à-dire de
              l'esprit, qui est directement associé au Coeur.
            </p>
            <p>
              En énergétique traditionnelle chinoise, le coeur englobe un concept plus large qui
              inclut les fonctions mentales et émotionnelles. En agissant entre autres sur le
              méridien du Coeur pour réguler le flux du Qi (énergie) et du sang l'esprit devient
              plus calme et la qualité du sommeil s'améliore.
            </p>
            <p>
              <span className="text-info">Le renforcement du système immunitaire :</span> En
              énergétique traditionnelle chinoise, le système immunitaire correspond au wei Qi, ou
              énergie défensive que chacun possède.
            </p>
            <p>
              Il nous protège des invasions externes de type vent, froid, humidité et chaleur. Les
              méridiens de la rate, du rein et du poumon sont efficaces pour activer la production
              des cellules du système immunitaire aidant ainsi à prévenir les maladies et à
              favoriser la santé globale.
            </p>
            <p>
              <span className="text-info">La régulation des déséquilibres hormonaux :</span>{' '}
              L'énergétique traditionnelle chinoise est souvent utilisée pour traiter les
              déséquilibres hormonaux chez les femmes, tels que les troubles menstruels, les
              symptômes de la ménopause et les troubles de la fertilité.
            </p>
            <p>
              <span className="text-info">L'amélioration de la digestion :</span> En agissant sur la
              libération des hormones digestives qui sont impliquées dans la régulation du processus
              de digestion et de l'absorption des nutriments, l'énergétique traditionnelle chinoise
              contribue au bon fonctionnement du système digestif.
            </p>
            <p>
              Les ballonnements, les reflux acides, les nausées et les douleurs abdominales sont
              ainsi soulagés.
            </p>
            <p>
              <span className="text-info">L'augmentation de l'énergie :</span> En rééquilibrant les
              flux d'énergie du corps, l'énergétique traditionnelle chinoise stimule et revitaliser
              le système énergétique, améliorant ainsi les niveaux d'énergie et réduisant la
              fatigue.
            </p>
            <p>
              <span className="text-info">Le soutien aux soins de la peau :</span> L'énergétique
              traditionnelle chinoise est souvent utilisée en esthétique pour aider à améliorer la
              santé de la peau, en favorisant l'éclat naturel, en réduisant les rides et en
              atténuant les problèmes cutanés tels que l'acné et l'eczéma.
            </p>
            <p>
              <span className="text-info">La gestion des dépendances :</span> L'énergétique
              traditionnelle chinoise peut être utilisée dans la gestion des dépendances, en aidant
              à réduire les symptômes de sevrage et à soutenir le processus de désintoxication.
            </p>
            <p>
              <span className="text-info">La cancérologie :</span> L'énergétique traditionnelle
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
