import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const AculiftingDetails: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/backgrounds/landing-page-1.png"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(79, 79, 93, 0.2))"
        backgroundPositionX="24%"
        backgroundPositionY="33%"
        htmlTitle={`Aculifting | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Aculifting</PageTitle>
          </div>
          <div className="" style={{ minHeight: '5vh' }}></div>
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
                L'aculifting, également connu sous le nom d'acupuncture esthétique ou acupuncture
                faciale, est une technique qui vise à rajeunir et à revitaliser le visage en
                utilisant des principes de l'acupuncture traditionnelle chinoise. Il s'agit d'une
                approche naturelle et non chirurgicale pour améliorer l'apparence et favoriser la
                santé de la peau du visage.
              </p>
              <p className="">
                L'aculifting consiste à stimuler des points d'acupuncture spécifiques du visage à
                l'aide de fines aiguilles ou parfois par la pression des doigts (acupression) pour
                favoriser la circulation sanguine, stimuler la production de collagène et
                d'élastine, ainsi que pour équilibrer l'énergie vitale du corps.
              </p>

              <p className="">Les avantages potentiels de l'aculifting incluent :</p>
              <p className="">
                <span className="text-info">Raffermissement de la peau :</span> L'aculifting peut
                aider à tonifier et à raffermir la peau en stimulant les fibroblastes, qui sont les
                cellules responsables de la production de collagène et d'élastine, essentiels à la
                fermeté et à l'élasticité de la peau.
              </p>
              <p className="">
                <span className="text-info">Réduction des rides et des ridules :</span> En stimulant
                les points d'acupuncture spécifiques du visage, l'aculifting peut aider à atténuer
                les rides et les ridules en améliorant la régénération cellulaire et la circulation
                sanguine, ce qui peut favoriser une apparence plus lisse et plus jeune.
              </p>
              <p>
                <span className="text-info">Amélioration de la circulation sanguine :</span>{' '}
                L'aculifting peut augmenter la circulation sanguine dans la région du visage, ce qui
                permet de mieux nourrir les tissus cutanés, d'éliminer les toxines et de favoriser
                une peau plus lumineuse et revitalisée.
              </p>
              <p>
                <span className="text-info">
                  Réduction des poches et des cernes sous les yeux :
                </span>{' '}
                L'aculifting peut aider à réduire l'apparence des poches et des cernes sous les yeux
                en améliorant le drainage lymphatique et en favorisant l'élimination des fluides et
                des toxines accumulés dans la région.
              </p>
              <p>
                <span className="text-info">Relaxation et réduction du stress facial :</span> Les
                séances d'aculifting peuvent être relaxantes et apaisantes pour le visage, aidant
                ainsi à réduire les tensions musculaires, les crispations et le stress accumulés, ce
                qui peut contribuer à une apparence plus détendue et équilibrée.
              </p>

              <p className="mb-0 pb-0">
                Il est important de souligner que l'aculifting ne produit pas des résultats
                spectaculaires ou immédiats comme une intervention chirurgicale, mais il peut offrir
                des améliorations subtiles et naturelles au fil du temps. La durée et la fréquence
                des séances peuvent varier en fonction des besoins individuels. Je fais une
                évaluation personnalisée et des recommandations adaptées à votre situation
                spécifique pour obtenir les meilleurs résultats.
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(42, 161, 198, 0.54), rgba(79, 79, 93, 0.3))"
            className="card text-start text-light font-monserrat mt-4"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Déroulement et tarifs</h5>
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

AculiftingDetails.displayName = 'AculiftingDetails';
