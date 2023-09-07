import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const AcupunctureDetails: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/aculifting-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.0), rgba(79, 79, 93, 0.20))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Acupuncture | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Acupuncture</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile
            background="linear-gradient(rgb(42, 161, 198, 0.54), rgba(79, 79, 93, 0.3))"
            className="card text-start text-light fs-5 font-monserrat px-4 py-4"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <p className="">
                L'Energétique traditionnelle chinoise est une pratique millénaire. Elle repose sur
                la connaissance du réseau énergétique parcourant tout le corps, connu sous le nom de
                Qi (ou Chi), qui circule le long de canaux spécifiques appelés méridiens. Son
                approche prend en compte l'individu dans sa globalité.
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
                L'objectif est de traiter la cause profonde des problèmes de santé et de promouvoir
                le bien-être global de la personne.
              </p>
              <p>
                Les points d'acupuncture le long des méridiens sont considérés comme des points
                d'accès pour réguler le flux du Qi (ou énergie vitale) et ainsi rétablir l'harmonie
                du corps.
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
                Les maux de dos, les douleurs musculaires et articulaires, les tendinites, les
                épicondylites, les bursites, les capsulites, les sciatiques, les cervicalgies, les
                maux de tête sont ainsi traités.
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
                En stimulant le système parasympathique, responsable de la relaxation et de la
                réponse de détente du corps.
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
                <span className="text-info">L'amélioration du sommeil :</span> Les troubles du
                sommeil sont souvent considérés comme étant liée à un déséquilibre du Shen,
                c'est-à-dire de l'esprit, qui est directement associé au Coeur.
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
                favoriser la santé globale en cas de sinusite, bronchite, asthme.
              </p>
              <p>
                <span className="text-info">La régulation des déséquilibres hormonaux :</span>{' '}
                L'énergétique traditionnelle chinoise est souvent utilisée pour traiter les
                déséquilibres hormonaux chez les femmes, tels que les troubles menstruels, les
                symptômes de la ménopause, l'endométriose et les troubles de la fertilité.
              </p>
              <p>
                <span className="text-info">L'amélioration de la digestion :</span> En agissant sur
                la libération des hormones digestives qui sont impliquées dans la régulation du
                processus de digestion et de l'absorption des nutriments, l'énergétique
                traditionnelle chinoise contribue au bon fonctionnement du système digestif.
              </p>
              <p>
                Les ballonnements, les reflux acides, les nausées et les douleurs abdominales sont
                ainsi soulagés tout comme la diarrhée, la constipation, la digestion difficile. Les
                problèmes de poids sont aussi abordés.
              </p>
              <p>
                <span className="text-info">L'augmentation de l'énergie :</span> En rééquilibrant
                les flux d'énergie du corps, l'énergétique traditionnelle chinoise stimule et
                revitalise le système énergétique, améliorant ainsi les niveaux d'énergie et
                réduisant la fatigue.
              </p>
              <p>
                <span className="text-info">Le soutien aux soins de la peau :</span> L'énergétique
                traditionnelle chinoise est souvent utilisée en esthétique pour aider à améliorer la
                santé de la peau, en favorisant l'éclat naturel, en réduisant les rides et en
                agissant sur les problèmes cutanés tels que l'acné, l'eczéma, le psoriasis.
              </p>
              <p>
                <span className="text-info">La gestion des dépendances :</span> L'énergétique
                traditionnelle chinoise peut être utilisée dans la gestion des dépendances, en
                aidant à réduire les symptômes de sevrage et à soutenir le processus de
                désintoxication à l'alcool, le tabac, la drogue.
              </p>
              <p>
                <span className="text-info">La cancérologie :</span> L'énergétique traditionnelle
                chinoise est un traitement d'appoint dans tous les cancers, préparation avant les
                examens, avant la chimiothérapie, la chirurgie, la radiothérapie, aide à la
                récupération après les traitements.
              </p>
              <p>
                Les traitements de l'énergétique traditionnelle chinoise pour les enfants sont
                généralement adaptés à leur âge et à leur constitution. L'ensemble du tableau de
                santé de l'enfant, y compris les symptômes, l'état émotionnel, les habitudes
                alimentaires et le mode de vie seront pris en compte pour répondre à ses besoins.
              </p>
              <p>
                L'énergétique traditionnelle chinoise ne remplace pas les traitements médicaux
                conventionnels, en particulier dans les cas de maladies graves. Il est donc
                essentiel de consulter un professionnel de la santé qualifié pour un diagnostic
                précis et un traitement approprié.
              </p>
              <p className="mb-0 pb-0">
                L'Organisation Mondiale de la Santé (OMS) reconnaît l'énergétique traditionnelle
                chinoise comme une approche de traitement efficace pour un large éventail de
                problèmes de santé. Elle peut être utilisée en complément d'autres traitements
                médicaux traditionnels. Les effets de l'énergétique traditionnelle chinoise peuvent
                varier d'une personne à l'autre, et l'approche de traitement doit être adaptée aux
                besoins individuels de chaque patient.
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(42, 161, 198, 0.54), rgba(79, 79, 93, 0.3))"
            className="card text-start text-light font-monserrat mt-4"
          >
            <div className="card-body">
              <h5 id="déroulement-et-tarifs" className="card-title mb-0 fw-bolder">
                Déroulement et tarifs
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-7">90 mn</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">6 allée du mortier</span>
                    <span className="text-nowrap fs-7">44620 LA MONTAGNE</span>
                    {websiteConfig.links.googleMaps.show && (
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-0"
                        link={websiteConfig.links.googleMaps.url}
                        analyticsEvent="open-google-maps"
                        title={websiteConfig.links.googleMaps.title}
                      >
                        <div className="d-flex flex-column align-items-center">
                          <span className="">{websiteConfig.links.googleMaps.label}</span>
                        </div>
                      </OpenExternalLinkButton>
                    )}
                    {websiteConfig.links.waze.show && (
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-2"
                        link={websiteConfig.links.waze.url}
                        analyticsEvent="open-waze"
                        title={websiteConfig.links.waze.title}
                      >
                        <div className="d-flex flex-column align-items-center">
                          <span className="">{websiteConfig.links.waze.label}</span>
                        </div>
                      </OpenExternalLinkButton>
                    )}
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-1 pb-0 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="fw-bolder">Adulte: 70€ </span>
                    <span className="fw-bolder">Enfant mineur: 60€</span>
                    <span className="">Remise de 10% à partir de la deuxième séance</span>
                    <span className="text-nowrap fs-7 fw-normal">
                      Moyens de paiement: chèque ou espèces
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-2 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link={websiteConfig.links.rdv.url}
                      title={websiteConfig.links.rdv.title}
                      analyticsEvent="rdv-acupuncture"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">{websiteConfig.links.rdv.label}</span>
                      </div>
                    </OpenExternalLinkButton>
                    <span className="mt-4">Ou bien appelez-moi directement :</span>
                    <CallablePhoneNumberButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      phoneNumber={websiteConfig.links.phone.url}
                      title="Appeler pour prendre un rdv, ou poser vos questions"
                      analyticsEvent="tel-acupuncture"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Sandra Giraudeau{' '}
                          <PhoneNumber phoneNumber={websiteConfig.links.phone.url} />
                        </span>
                      </div>
                    </CallablePhoneNumberButton>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between">
                    <p className="">
                      Une séance énergetique traditionnelle chinoise d'acupuncture dure environ une
                      heure trente.
                    </p>
                    <p>
                      Elle débute par un échange avec la personne pour obtenir des informations sur
                      ses symptômes physiques, son état émotionnel, ses habitudes de vie et tout
                      autre élément pertinent pour sa santé. Cela permet d'avoir une vue d'ensemble
                      sur son état énergétique.
                    </p>
                    <p>Un principe de traitement pourra alors être établi.</p>
                    <p>
                      La séance se termine ensuite par un massage TuiNa :{' '}
                      <Link
                        to="/massage-tuina"
                        className="text-decoration-none text-light"
                        title="En savoir plus sur le massage TuiNa"
                        aria-label="En savoir plus sur le massage TuiNa"
                      >
                        <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                          En savoir plus
                        </span>
                      </Link>
                    </p>
                    <p>
                      Renseignez vous auprès de votre mutuelle pour le remboursement de votre
                      séance.
                    </p>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

AcupunctureDetails.displayName = 'Acupuncture';
