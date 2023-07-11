import { FC } from 'react';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
import { OneLetterPill } from '../components/OneLetterPill';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const Temoignages: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-temoignages.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
        backgroundPosition="33%"
        htmlTitle={`Témoignages | ${websiteConfig.websiteTitle}`}
      >
        <div>
          <div className="mt-5">
            <PageTitle>Témoignages</PageTitle>
          </div>

          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>I</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Isabelle Jossot</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Je tiens à remercier Sandra tant pour son écoute que pour son professionnalisme.
                    Je l'ai consulter en acupuncture pour une problématique récurrente qui enfin,
                    est en passe d'être réglée définitivement. Et j'ai pu également expérimenter les
                    massages qu'elle propose... que de la douceur.... du pur bonheur ! Un grand
                    Merci
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-4">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>S</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Sophie Violeau</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    J'ai effectué 2 séances d'acupuncture avec Sandra afin de régler des problèmes
                    liés à la pré-ménopause. Elle a su me rassurer et m'a mise en confiance Elle a
                    réalisé les soins tout en douceur. Ceux-ci ont été efficace et m'ont réellement
                    soulagé Merci pour tout Sandra
                  </Description>
                </div>
              </div>
            </div>

            <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-4">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>L</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5">Lolote Foucher</div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    J'ai pu essayé le massage qui est extraordinaire au niveau des
                    sensations...plein d'émotions Un lâcher prise d'une heure et demi !!!
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

Temoignages.displayName = 'Temoignages';
