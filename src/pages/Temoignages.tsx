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
        backgroundImageUrl="/images/backgrounds/testimonies-page.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.3) 90%, rgba(79, 79, 93, 0.7) 100%)"
        backgroundPosition="33%"
        htmlTitle={`Témoignages | ${websiteConfig.websiteTitle}`}
      >
        <div>
          <div className="mt-7">
            <PageTitle>Témoignages</PageTitle>
          </div>

          <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
            <div className="card card-sm bg-color-dark-semi-transparent text-start text-light font-monserrat m-2">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>I</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5 mb-0">Isabelle J.</div>
                  <div className="card-title fs-7">
                    <span>
                      58 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Saint Herblain
                    </span>
                  </div>
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

            <div className="card card-sm bg-color-dark-semi-transparent text-start text-light font-monserrat m-2">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>S</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5 mb-0">Sophie V.</div>
                  <div className="card-title fs-7">
                    <span>
                      48 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Basse Indre
                    </span>
                  </div>
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

            <div className="card card-sm bg-color-dark-semi-transparent text-start text-light font-monserrat m-2">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>L</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5 mb-0">Lolote F.</div>
                  <div className="card-title fs-7">
                    <span>
                      45 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Bouaye
                    </span>
                  </div>
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

            <div className="card card-sm bg-color-dark-semi-transparent text-start text-light font-monserrat m-2">
              <div className="card-body d-flex flex-row align-items-start">
                <OneLetterPill>R</OneLetterPill>
                <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                  <div className="card-title fs-5 mb-0">Romain P.</div>
                  <div className="card-title fs-7">
                    <span>
                      34 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Bouguenais
                    </span>
                  </div>
                  <div>
                    <FiveStarRating />
                  </div>
                  <Description>
                    Merci à Sandra qui après une séance d'acupuncture et une séance de massage à
                    permis au stress, aux tensions du corps de se relâcher. Meilleure gestion des
                    tensions et du corps au quotidien, mon énergie à augmenté considérablement, les
                    douleurs ont disparu. Les tensions s'accumulent parfois pendant des années et
                    j'avais testé plusieurs méthodes sans résultats. Sandra est très professionnelle
                    et précise dans sa pratique, je recommande, pour découvrir, pour soins du corps.
                    Merci
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
