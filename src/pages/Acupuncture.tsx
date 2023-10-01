import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousForm } from '../components/RendezVousForm';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const Acupuncture: FC = () => {
  return (
    <>
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
          </div>
          <div className="" style={{ minHeight: '5vh' }}></div>
          <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
            <SemiTransparentTile
              background="linear-gradient(rgb(48, 115, 78, 0.54), rgba(79, 79, 93, 0.3))"
              className="card card-sm text-start text-light fs-5 font-monserrat px-4 py-3 m-2"
            >
              <ReadMoreReadLess
                height={'21vh'}
                readMoreText={'Lire plus'}
                readLessText={'Lire moins'}
              >
                <p className="">
                  L'Energétique traditionnelle chinoise est une pratique millénaire. Elle repose sur
                  la connaissance du réseau énergétique parcourant tout le corps, connu sous le nom
                  de Qi (ou Chi), qui circule le long de canaux spécifiques appelés méridiens. Son
                  approche prend en compte l'individu dans sa globalité.
                </p>

                <p className="">
                  Les domaines d'application de l'énergétique traditionnelle chinoise incluent :
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>Le soulagement de la douleur
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  La réduction du stress et de l'anxiété
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  L'amélioration du sommeil
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  Le renforcement du système immunitaire
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  La régulation des déséquilibres hormonaux
                </p>
                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  L'amélioration de la digestion
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  L'augmentation de l'énergie
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  Le soutien aux soins de la peau
                </p>
                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  La gestion des dépendances
                </p>
                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  Traitements adaptés à l'enfant
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>
                  La cancérologie
                </p>
                <p className="fw-bolder mt-2">
                  <Link
                    to="/energetique-traditionnelle-chinoise"
                    className="text-decoration-none text-light "
                    title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                    aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                  >
                    <span className="btn btn-outline-light fw-bolder font-playfair">
                      En savoir plus
                    </span>
                  </Link>
                </p>
              </ReadMoreReadLess>
            </SemiTransparentTile>
            <SemiTransparentTile
              background="linear-gradient(rgb(48, 115, 78, 0.54), rgba(79, 79, 93, 0.3))"
              className="card card-sm text-start text-light font-monserrat m-2"
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
                        Implantée dans la région Sud Nantes, tout proche de Bouaye, Bouguenais,
                        Rezé, Les Sorinières, Brains, Saint Jean de Boiseau, Le Pellerin, Sainte
                        Pazanne,Port Saint Père, Saint Mars de Coutais, Pont Saint Martin, Saint
                        Aignan de grand Lieu, Indre, Couëron, Saint Herblain,
                      </p>
                      <span className="text-nowrap fs-7">Je vous reçois au :</span>
                      <span className="text-nowrap fs-7 mt-2">6 allée du mortier</span>
                      <span className="text-nowrap fs-7">44620 LA MONTAGNE</span>
                      <span className="text-nowrap fs-7 mb-2">( Derrière le Hyper U )</span>
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
                      <a
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        href="#prendre-rendez-vous"
                      >
                        Prendre rendez-vous
                      </a>

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
                        Une séance énergetique traditionnelle chinoise d'acupuncture dure environ
                        une heure trente.
                      </p>
                      <p>
                        Elle débute par un échange avec la personne pour obtenir des informations
                        sur ses symptômes physiques, son état émotionnel, ses habitudes de vie et
                        tout autre élément pertinent pour sa santé. Cela permet d'avoir une vue
                        d'ensemble sur son état énergétique.
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

            <SemiTransparentTile
              background="linear-gradient(rgb(48, 115, 78, 0.54), rgba(79, 79, 93, 0.3))"
              className="card card-sm text-start text-light font-monserrat m-2"
            >
              <div className="card-header py-3">
                <h5 id="prendre-rendez-vous" className="card-title mb-0 fw-bolder text-center">
                  Prendre rendez vous
                </h5>
              </div>
              <div className="card-body">
                <RendezVousForm
                  analyticsEvent="rdv-form-acupuncture"
                  subjectOptions={[
                    { label: 'Prendre un rendez vous acupuncture' },
                    { label: 'Autre' },
                  ]}
                />
              </div>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

Acupuncture.displayName = 'Acupuncture';
