import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const Acupuncture: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/landing-page-1.png"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(79, 79, 93, 0.2))"
      backgroundPositionX="24%"
      backgroundPositionY="33%"
      htmlTitle={`Acupuncture | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Acupuncture</PageTitle>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-100 mt-1"
            modalId="prendre-rendez-vous"
          >
            Prendre rendez-vous
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '5vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(48, 115, 78, 0.54), rgba(79, 79, 93, 0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2"
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
                Les domaines d'application de l'énergétique traditionnelle chinoise incluent :
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#soulagement-de-la-douleur"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager la douleur."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager la douleur."
                >
                  <i className="bi bi-check-lg"></i>
                  Le soulagement de la douleur
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#reduction-stress-et-anxiete"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut réduire le stress et l'anxiété."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut réduire le stress et l'anxiété."
                >
                  <i className="bi bi-check-lg"></i>
                  La réduction du stress et de l'anxiété
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#amelioration-du-sommeil"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut améliorer le sommeil."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut améliorer le sommeil."
                >
                  <i className="bi bi-check-lg"></i>
                  L'amélioration du sommeil
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#renforcement-du-systeme-immunitaire"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à renforcer le système immunitaire."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à renforcer le système immunitaire."
                >
                  <i className="bi bi-check-lg"></i>
                  Le renforcement du système immunitaire
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#regulation-des-desequilibres-hormonaux"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à réguler les déséquilibres hormonaux."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à réguler les déséquilibres hormonaux."
                >
                  <i className="bi bi-check-lg"></i>
                  La régulation des déséquilibres hormonaux
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#amelioration-de-la-digestion"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à améliorer la digestion."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à améliorer la digestion."
                >
                  <i className="bi bi-check-lg"></i>
                  L'amélioration de la digestion
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#augmentation-de-l-energie"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à augmenter l'énergie."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à augmenter l'énergie."
                >
                  <i className="bi bi-check-lg"></i>
                  L'augmentation de l'énergie
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#soutien-aux-soins-de-la-peau"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider au soutien des soins de la peau."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider au soutien des soins de la peau."
                >
                  <i className="bi bi-check-lg"></i>
                  Le soutien aux soins de la peau
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#gestion-des-dependances"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à la gestion des dépendances."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut aider à la gestion des dépendances."
                >
                  <i className="bi bi-check-lg"></i>
                  La gestion des dépendances
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#traitement-adapte-a-l-enfant"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise propose des traitements adaptés à l'enfant."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise propose des traitements adaptés à l'enfant."
                >
                  <i className="bi bi-check-lg"></i>
                  Traitements adaptés à l'enfant
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>

              <p className="fw-bolder mb-2">
                <Link
                  to="/energetique-traditionnelle-chinoise#cancerologie"
                  className="text-decoration-none icon-link icon-link-hover link-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise est un traitement d'appoint dans tous les cancers."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise est un traitement d'appoint dans tous les cancers."
                >
                  <i className="bi bi-check-lg"></i>
                  La cancérologie
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </p>
              <p className="fw-bolder mt-2">
                <Link
                  to="/energetique-traditionnelle-chinoise"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                >
                  <span className="btn btn-outline-light fw-bolder font-playfair mb-1 me-2">
                    En savoir plus
                  </span>
                </Link>
                <OpenModalButton
                  className="btn btn-outline-light fw-bolder mt-0 mb-1"
                  modalId="prendre-rendez-vous"
                >
                  Prendre rendez-vous
                </OpenModalButton>
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(48, 115, 78, 0.54), rgba(79, 79, 93, 0.3))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <div className="card-header py-3">
              <h5 id="déroulement-et-tarifs" className="card-title mb-0 fw-bolder text-center">
                Déroulement et tarifs
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-6">90 mn</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <p className="mt-1 fs-7">
                      Implantée dans la région Sud Nantes, tout proche de Bouaye, Bouguenais, Rezé,
                      Les Sorinières, Brains, Saint Jean de Boiseau, Le Pellerin, Sainte
                      Pazanne,Port Saint Père, Saint Mars de Coutais, Pont Saint Martin, Saint
                      Aignan de grand Lieu, Indre, Couëron, Saint Herblain,
                    </p>
                    <span className="text-nowrap fs-7">Je vous reçois au :</span>
                    <span className="text-nowrap fs-7 mt-2">1 rue de Beauséjour</span>
                    <span className="text-nowrap fs-7 mb-2">44830 Bouaye</span>
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
                    <OpenModalButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      modalId="prendre-rendez-vous"
                    >
                      Prendre rendez-vous
                    </OpenModalButton>

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
                    <p>
                      <OpenModalButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        modalId="prendre-rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenModalButton>
                    </p>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>

        <RendezVousModal
          modalId="prendre-rendez-vous"
          analyticsEvent="rdv-form-acupuncture"
          subjectOptions={[{ label: 'Prendre un rendez vous acupuncture' }, { label: 'Autre' }]}
          backgroundColor="#1f3a28"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Acupuncture.displayName = 'Acupuncture';
