import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { Quote } from '../components/Quote';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const MassageEveilDivin: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/massage-eveil-divin-background.png"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.2))"
        backgroundPositionX="70%"
        backgroundPositionY="33%"
        htmlTitle={`Massage Éveil Divin | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Massage Éveil Divin</PageTitle>
          </div>
          <div className="" style={{ minHeight: '5vh' }}></div>
          <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
            <div className="m-0 p-0">
              <SemiTransparentTile
                background="linear-gradient(rgb(185, 128, 90, 0.3), rgba(79, 79, 93, 0.3))"
                className="card card-lg text-start text-light fs-5 font-monserrat px-4  py-3 m-2"
              >
                <ReadMoreReadLess
                  height={'21vh'}
                  readMoreText={'Lire plus'}
                  readLessText={'Lire moins'}
                >
                  <p className="">
                    Le massage Éveil Divin s'inspire des rituels du massage cachemirien.
                  </p>
                  <p>
                    Installé sur futon, vous vivrez l'expérience de votre voyage intérieur par le
                    toucher délicat, lent et enveloppant de mes mains.
                  </p>
                  <p>
                    Dans cet espace sacré, vous pourrez ainsi vous abandonnez à une relaxation
                    profonde qui sera la voie d'accès à la dimension divine de votre corps.
                  </p>
                  <p className="mb-0 pb-0">
                    Le massage du Lingam (pour les hommes) et de la Yoni (pour les femmes) est
                    abordé pour un temps dédié. Ce massage vous apportera une véritable
                    transformation dans tout votre être.
                  </p>
                </ReadMoreReadLess>
              </SemiTransparentTile>
              <SemiTransparentTile
                background="linear-gradient(rgb(185, 128, 90, 0.3), rgba(79, 79, 93, 0.3))"
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
              background="linear-gradient(rgb(185, 128, 90, 0.3), rgba(79, 79, 93, 0.3))"
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
                      <span className="text-nowrap fs-7">2h30 ou 3h</span>
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
                <TransparentListGroupItem className="pt-1 pb-0 text-light fw-bolder">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">180€ la séance de 2h30</span>
                      <span className="">210€ la séance de 3h</span>
                      <span className="fs-7 fw-normal">Moyens de paiement: chèque ou espèces</span>
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="py-3 text-light fw-bolder">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-event fs-2 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">Rdv validé uniquement après entretien téléphonique</span>
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        link={websiteConfig.links.rdv.url}
                        title="Prendre rendez-vous pour l'entretien téléphonique"
                        analyticsEvent="rdv-masage-eveil-divin"
                      >
                        <div className="d-flex flex-column align-items-center">
                          <span className="">
                            Prendre rendez-vous pour l'entretien téléphonique
                          </span>
                        </div>
                      </OpenExternalLinkButton>
                      <span className="mt-4">Ou bien appelez-moi directement :</span>
                      <CallablePhoneNumberButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        phoneNumber={websiteConfig.links.phone.url}
                        title="Appeler pour l'entretien téléphonique"
                        analyticsEvent="tel-massage-eveil-divin"
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
                    <i className="bi bi-shield-check fs-3 me-4"></i>
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
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="py-3 text-light fw-bolder">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-info-circle fs-1 me-4"></i>
                    <div className="d-flex flex-column justify-content-between">
                      <p className="">Une séance de massage Éveil Divin dure environ 2h30.</p>
                      <p>Le massage en lui-même dure alors 1h30.</p>
                      <p>Quand la séance est de 3h, le massage en lui-même dure 2h.</p>
                      <p>
                        Je vous accueille et vous propose un temps d'échange pour répondre à vos
                        attentes et besoins spécifiques sur d'éventuelles préoccupations. Cela
                        contribue à établir une relation de confiance pour recevoir le massage dans
                        le respect du cadre posé.
                      </p>
                      <p>
                        Le massage sera suivi d'un temps d'intégration pour revenir à vous en
                        douceur.
                      </p>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

MassageEveilDivin.displayName = 'MassageEveilDivin';
