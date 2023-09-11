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
                La cancérologie
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

Acupuncture.displayName = 'Acupuncture';
