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
export const MassageEveilDesSens: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/massage-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Massage éveil des sens | ${websiteConfig.websiteTitle}`}
      >
        <div className="w-100 d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Massage éveil des sens</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile className="card text-start text-light fs-2 font-monserrat px-4 py-4">
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <p className="">Le massage éveil des sens est un massage sur table.</p>
              <p>Le toucher est très doux, très lent, et enveloppant.</p>
              <p>Le corps est honoré dans son entièreté.</p>
              <p>
                Tout comme en énergétique traditionnelle chinoise, le massage tantrique permet de
                faire circuler l'énergie pour redonner vitalité et harmonie dans les corps physique,
                émotionnel, et mental.
              </p>
              <p>
                Dans nos sociétés occidentales, nous sommes habitués à faire, nous ne savons pas
                prendre le temps.
              </p>
              <p>
                Notre mental aime bien se nourrir de nos actions, de nos pensées. Ce toucher lent va
                vous permettre de lâcher prise que ce soit au niveau de votre mental et dans votre
                corps. C'est ainsi que vous vous reconnecterez à votre corps, à votre essence
                profonde dans toutes les di-mensions physiques, émotionnelles, spirituelles.
              </p>
              <p>
                Vous pourrez alors accueillir tout ce qui se passe à l'intérieur de votre corps : de
                nouveaux ressentis, des émotions, du plaisir.
              </p>
              <p>
                Vous profiterez de cet espace enveloppant, réparateur qui vous nourrira votre être
                tout entier.
              </p>
              <p>
                Plus spécifiquement pour la femme, la massage tantrique aide à réparer des
                traumatismes lié à différentes mémoires, à se reconnecter à son corps, à l'aimer tel
                qu'il est, à s'ouvrir à sa sensualité.
              </p>
              <p>
                Et pour l'homme, le massage va l'aider à s'ouvrir à son féminin, à ressentir
                l'énergie dans tout son corps pour vivre une sexualité différente, sans performance.
              </p>
              <p>
                IL EST CRUCIAL POUR MOI DE RAPPELER QUE CETTE PRESTATION N'A AUCUN CARACTERE SEXUEL.
                La masseuse est habillée et en aucun cas la personne qui masse n'est touchée. Le
                massage n'a pas pour but d'exciter mais de guérir et de se reconnecter à son corps.
              </p>
              <p className="mb-0 pb-0">
                Je masse dans le respect de votre corps et votre consentement est très important. Je
                m'adapte et respecte vos limites si vous avez besoin de garder vos sous-vêtements.
                Merci de vous abstenir si vous êtes aucunement dans cette démarche.
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile className="w-100 card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Déroulement et tarifs</h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-7">2h30</span>
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
                    <span className="">150€</span>
                    <span className="">180€ avec massage du Lingam</span>
                    <span className="fs-7 fw-normal">
                      Moyens de paiement: chèque, espèces ou virement
                    </span>
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
                      analyticsEvent="rdv-masage-eveil-des-sens"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">Prendre rendez-vous pour l'entretien téléphonique</span>
                      </div>
                    </OpenExternalLinkButton>
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
                    <p className="">Une séance de message éveil des sens dure environ 2h30.</p>
                    <p>Le massage en lui-même dure 1h30.</p>
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
                      Pour des raisons évidentes d'hygiène, et pour le confort de la personne massée
                      comme de la masseuse,{' '}
                      <span className="fw-bolder">
                        il est nécessaire de prendre une douche avant les massages
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Quote
                sentence="Votre corps est un temple, prenez en grand soin et souvenez vous que vous êtes la divinité qui y vit."
                author="OSHO"
              />
            </div>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

MassageEveilDesSens.displayName = 'MassageEveilDesSens';
