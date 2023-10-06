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
export const Aculifting: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/backgrounds/aculifting.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(79, 79, 93, 0.2))"
        backgroundPositionX="43%"
        backgroundPositionY="33%"
        htmlTitle={`Aculifting | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Aculifting</PageTitle>
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
              background="linear-gradient(rgb(97, 96, 103, 0.3), rgba(79, 79, 93, 0.3))"
              className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2"
            >
              <ReadMoreReadLess
                height={'21vh'}
                readMoreText={'Lire plus'}
                readLessText={'Lire moins'}
              >
                <p className="">
                  L'aculifting, également connu sous le nom d'acupuncture esthétique ou acupuncture
                  faciale, est une technique qui vise à rajeunir et à revitaliser le visage en
                  utilisant des principes de l'acupuncture traditionnelle chinoise. Il s'agit d'une
                  approche naturelle et non chirurgicale pour améliorer l'apparence et favoriser la
                  santé de la peau du visage.
                </p>

                <p className="">Les avantages potentiels de l'aculifting incluent :</p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>Raffermissement de la peau
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>Réduction des rides et des
                  ridules
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>Amélioration de la circulation
                  sanguine
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>Réduction des poches et des
                  cernes sous les yeux
                </p>

                <p className="fw-bolder">
                  <i className="bi bi-check-lg text-light me-1"></i>Relaxation et réduction du
                  stress facial
                </p>
                <p className="fw-bolder mt-2">
                  <Link
                    to="/aculifting-en-details"
                    className="text-decoration-none text-light "
                    title="En savoir plus sur l'Aculifting."
                    aria-label="En savoir plus sur l'Aculifting."
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
              background="linear-gradient(rgb(97, 96, 103, 0.3), rgba(79, 79, 93, 0.3))"
              className="card card-lg text-start text-light font-monserrat m-2"
            >
              <div className="card-header py-3">
                <h5 className="card-title mb-0 fw-bolder text-center">Déroulement et tarifs</h5>
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
                <TransparentListGroupItem className="pt-1 pb-0 text-light fw-bolder">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">80€</span>
                      <span className="">Forfait 4 séances: 280€</span>
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
                        analyticsEvent="tel-aculifting"
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
                      <p className="">Une séance d'aculifting dure environ une heure trente.</p>
                      <p>
                        Le traitement débute par la pose de fines aiguilles à usage unique et
                        stériles, laissées en place 20 minutes et se termine par un modelage liftant
                        du visage.
                      </p>
                      <p>
                        Le traitement n'est pas douloureux. La sensation liée à la piqûre de
                        l'aiguille peut être considérée comme négligeable.
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
            analyticsEvent="rdv-form-aculifting"
            subjectOptions={[{ label: 'Prendre un rendez vous aculifting' }, { label: 'Autre' }]}
            backgroundColor="#d79b76"
          ></RendezVousModal>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

Aculifting.displayName = 'Aculifting';
