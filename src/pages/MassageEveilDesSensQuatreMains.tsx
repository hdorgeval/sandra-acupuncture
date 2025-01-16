import type { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { Quote } from '../components/Quote';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const MassageEveilDesSensQuatreMains: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/massage-quatre-mains.png"
      backgroundOverlay="linear-gradient(to bottom,rgba(79, 79, 93, 0.20),rgba(0, 0, 0, 0.1))"
      backgroundPositionX="60%"
      backgroundPositionY="33%"
      htmlTitle={`Massage Éveil des Sens 4 mains | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Massage Éveil des Sens 4 mains</PageTitle>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-75 mt-1"
            modalId="prendre-rendez-vous"
          >
            Prendre rendez-vous
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '5vh' }} />
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <div className="m-0 p-0">
            <SemiTransparentTile
              background="linear-gradient(rgb(97, 34, 17, 0.37), rgba(79, 79, 93, 0.2))"
              className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2"
            >
              <ReadMoreReadLess
                height={'21vh'}
                readMoreText={'Lire plus'}
                readLessText={'Lire moins'}
              >
                <p className="">
                  Le massage Éveil des Sens quatre mains est un massage Éveil des Sens où je suis
                  accompagnée par un masseur experimenté.
                </p>
                <p>
                  Je vous propose un voyage intérieur profond et transformateur. Dans une harmonie
                  coordonnée des gestes, vos sensations seront d'autant plus exacerbées pour vous
                  connecter à toutes les dimensions de votre être.
                </p>
                <p className="">Vous vivrez une expérience inoubliable.</p>
                <p className="fw-bolder mt-2 mb-0 pb-0">
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
              background="linear-gradient(rgb(97, 34, 17, 0.37), rgba(79, 79, 93, 0.2))"
              className="card card-lg text-start text-light font-playfair m-2"
            >
              <div className="card-body">
                <Quote
                  sentence="Votre corps est un temple, prenez en grand soin et souvenez vous que vous êtes la divinité qui y vit."
                  author="OSHO"
                />
              </div>
            </SemiTransparentTile>
          </div>

          <SemiTransparentTile
            background="linear-gradient(rgb(97, 34, 17, 0.37), rgba(79, 79, 93, 0.2))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <div className="card-header py-3">
              <h5 className="card-title mb-0 fw-bolder text-center">Déroulement et tarifs</h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4" />
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-6">1h30</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4" />
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
              <TransparentListGroupItem className="pt-1 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4" />
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">180€</span>
                    <span className="fs-7 fw-normal">Moyens de paiement: chèque ou espèces</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-2 me-4" />
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Rdv validé uniquement après entretien téléphonique</span>
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
                      title="Appeler pour l'entretien téléphonique"
                      analyticsEvent="tel-massage-eveil-des-sens"
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
                  <i className="bi bi-shield-check fs-3 me-4" />
                  <div className="d-flex flex-column justify-content-between ">
                    <p className="">
                      Je m'engage à ce que la séance de massage se déroule selon la charte
                      ci-dessous:
                    </p>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link="https://association-massage-tantrique.com/charte-ethique-professionnelle/"
                      title="Charte éthique professionnelle de l'Association Massage Tantrique"
                      analyticsEvent="open-charte-ethique"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Charte éthique professionnelle de l'Association Massage Tantrique
                        </span>
                      </div>
                    </OpenExternalLinkButton>
                    <p className="mt-2">
                      Je suis certifiée par Tantr'âme et Corps, école de massage tantrique et
                      cachemirien:
                    </p>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-0"
                      link="https://tantrametcorps.com/"
                      title="Tantr'âme et Corps | École de massage tantrique et cachemirien"
                      analyticsEvent="open-tantrametcorps"
                    >
                      <img
                        className="img-fluid bg-gradient bg-black bg-opacity-50 p-2"
                        src="images/tantrametcorps.png"
                        alt="Tantr'âme et Corps"
                      />
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4" />
                  <div className="d-flex flex-column justify-content-between">
                    <p className="">
                      Une séance de massage Éveil des Sens 4 mains dure environ 1h30.
                    </p>
                    <p>Le massage en lui-même dure 1h.</p>
                    <p>
                      Je vous accueille et vous propose un temps d'échange pour répondre à vos
                      attentes et besoins spécifiques sur d'éventuelles préoccupations. Cela
                      contribue à établir une relation de confiance pour recevoir le massage dans le
                      respect du cadre posé.
                    </p>
                    <p>
                      Le massage sera suivi d'un temps d'intégration pour revenir à vous en douceur.
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
          analyticsEvent="rdv-form-massage-eveil-des-sens-4-mains"
          subjectOptions={[
            { label: 'Prendre un rendez vous Massage Eveil des Sens 4 mains' },
            { label: 'Autre' },
          ]}
          backgroundColor="#432317"
        />
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

MassageEveilDesSensQuatreMains.displayName = 'MassageEveilDesSensQuatreMains';
