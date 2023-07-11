import { FC } from 'react';
import { Link } from 'react-router-dom';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const Acupuncture: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/aculifting-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Acupuncture | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Acupuncture</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <p className="">
                L'Acupuncture est une discipline millénaire. Elle repose sur la connaissance et
                l'utilisation du réseau énergétique parcourant toute la surface du corps à travers
                des méridiens, sur lesquels se trouvent les points d'acupuncture tout en tenant
                compte de l'individu dans sa globalité.
              </p>
              <p className="">
                Différentes causes peuvent perturber la circulation énergétique dans le corps :
                causes climatiques ( Ex : un coup de froid...) émotionnelles ( un deuil, une
                séparation... ) alimentaires ( excès de sucre, alcool... ) chimiques ( effets
                secondaires de certains médicaments lourds... ).
              </p>
              <p>
                Apparaissent alors des douleurs et pathologies sur le système qui est atteint. Les
                points d'acupuncture sont ainsi utilisés comme "fusible" à travers les méridiens
                pour distribuer le courant "bioélectricité" perturber afin de :
              </p>
              <p className="ps-4">Rétablir les bonnes hormones, corriger le système immunitaire.</p>
              <p className="ps-4">Favoriser l'autoréparation du corps via les cellules souches.</p>
              <p className="">
                L'acupuncture s'applique en tant que méthode préventive ou curative.
              </p>

              <p className="">Les domaines d'application de l'acupuncture incluent :</p>
              <p className="">
                <span className="text-info">Soulagement de la douleur :</span> L'acupuncture est
                souvent utilisée pour soulager divers types de douleurs, comme les maux de dos, les
                douleurs musculaires, les migraines et les douleurs articulaires. Elle stimule la
                libération d'endorphines, les analgésiques naturels du corps.
              </p>
              <p>
                <span className="text-info">Réduction du stress et de l'anxiété :</span>{' '}
                L'acupuncture favorise la relaxation profonde, réduit le stress et l'anxiété en
                aidant à équilibrer les hormones du stress, favorisant ainsi une sensation de calme
                et de bien-être.
              </p>
              <p>
                <span className="text-info">Amélioration du sommeil :</span> En favorisant la
                détente, l'acupuncture peut aider à réguler les troubles du sommeil, tels que
                l'insomnie, en facilitant l'endormissement et en améliorant la qualité du sommeil.
              </p>
              <p>
                <span className="text-info">Renforcement du système immunitaire :</span>{' '}
                L'acupuncture peut stimuler le système immunitaire en augmentant la production de
                cellules immunitaires, aidant ainsi à prévenir les maladies et à favoriser la santé
                globale.
              </p>
              <p>
                <span className="text-info">Régulation des déséquilibres hormonaux :</span>{' '}
                L'acupuncture est souvent utilisée pour traiter les déséquilibres hormonaux chez les
                femmes, tels que les troubles menstruels, les symptômes de la ménopause et les
                troubles de la fertilité.
              </p>
              <p>
                <span className="text-info">Amélioration de la digestion :</span> L'acupuncture peut
                aider à réguler le système digestif, soulageant les troubles digestifs tels que les
                ballonnements, les reflux acides, les nausées et les douleurs abdominales.
              </p>
              <p>
                <span className="text-info">Augmentation de l'énergie :</span> En rééquilibrant les
                flux d'énergie du corps, l'acupuncture peut stimuler et revitaliser le système
                énergétique, améliorant ainsi les niveaux d'énergie et réduisant la fatigue.
              </p>
              <p>
                <span className="text-info">Soutien aux soins de la peau :</span> L'acupuncture est
                souvent utilisée en esthétique pour aider à améliorer la santé de la peau, en
                favorisant l'éclat naturel, en réduisant les rides et en atténuant les problèmes
                cutanés tels que l'acné et l'eczéma.
              </p>
              <p>
                <span className="text-info">Gestion des dépendances :</span> L'acupuncture peut être
                utilisée comme un complément dans la gestion des dépendances, en aidant à réduire
                les symptômes de sevrage et à soutenir le processus de désintoxication.
              </p>
              <p>
                <span className="text-info">Cancérologie :</span> L'acupuncture est un traitement
                d'appoint dans tous les cancers, préparation avant les examens, avant la
                chimiothérapie, la chirurgie, la radiothérapie, aide à la récupération après les
                traitements.
              </p>

              <p className="mb-0 pb-0">
                Il est important de noter que l'acupuncture peut offrir un soulagement temporaire de
                la douleur, mais elle ne traite pas la cause sous-jacente de la douleur. Si vous
                avez des douleurs chroniques ou graves, il est recommandé de consulter un
                professionnel de la santé pour obtenir un diagnostic approprié et un plan de
                traitement complet.
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Déroulement et tarifs</h5>
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
                    <span className="fw-bolder">Enfant mineur: 50€</span>
                    <span className="">Remise de 10% à partir de la deuxième séance</span>
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
                      analyticsEvent="rdv-aculifting"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">{websiteConfig.links.rdv.label}</span>
                      </div>
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <p className="">
                      Une séance énergetique traditionnelle chinoise d'acupuncture dure environ une
                      heure trente.
                    </p>
                    <p>
                      La séance commence par un questionnaire pour mieux comprendre votre situation
                      et personnaliser le traitement en conséquence.
                    </p>
                    <p>
                      Le traitement débute par la pose de fines aiguilles à usage unique et
                      stériles, laissées en place 20 minutes.
                    </p>
                    <p>
                      Le traitement n'est pas douloureux. La sensation liée à la piqûre de
                      l'aiguille peut être considérée comme négligeable.
                    </p>
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

Acupuncture.displayName = 'Acupuncture';
