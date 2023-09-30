import { FC } from 'react';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
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
            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                  <div
                    className="rounded-circle d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: '#4f46e5',
                    }}
                  >
                    <span className="fs-1 fw-bolder p-0">I</span>
                  </div>
                  <div className="d-flex flex-column align-items-start ms-4">
                    <div className="card-title fs-5 mb-0">Isabelle J.</div>
                    <div className="card-title fs-7">
                      <span>
                        58 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Saint Herblain
                      </span>
                    </div>
                    <div>
                      <FiveStarRating />
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-100">
                  <Description>
                    Je tiens à remercier Sandra tant pour son écoute que pour son professionnalisme.
                    Je l'ai consultée en acupuncture pour une problématique récurrente qui enfin,
                    est en passe d'être réglée définitivement. Et j'ai pu également expérimenter les
                    massages qu'elle propose... que de la douceur.... du pur bonheur ! Un grand
                    Merci
                  </Description>
                </div>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                  <div
                    className="rounded-circle d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: '#4f46e5',
                    }}
                  >
                    <span className="fs-1 fw-bolder p-0">S</span>
                  </div>
                  <div className="d-flex flex-column align-items-start ms-4">
                    <div className="card-title fs-5 mb-0">Sophie V.</div>
                    <div className="card-title fs-7">
                      <span>
                        48 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Basse Indre
                      </span>
                    </div>
                    <div>
                      <FiveStarRating />
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-100">
                  <Description>
                    J'ai effectué 2 séances d'acupuncture avec Sandra afin de régler des problèmes
                    liés à la pré-ménopause. Elle a su me rassurer et m'a mise en confiance Elle a
                    réalisé les soins tout en douceur. Ceux-ci ont été efficace et m'ont réellement
                    soulagé Merci pour tout Sandra
                  </Description>
                </div>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                  <div
                    className="rounded-circle d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: '#4f46e5',
                    }}
                  >
                    <span className="fs-1 fw-bolder p-0">L</span>
                  </div>
                  <div className="d-flex flex-column align-items-start ms-4">
                    <div className="card-title fs-5 mb-0">Lolote F.</div>
                    <div className="card-title fs-7">
                      <span>
                        45 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Bouaye
                      </span>
                    </div>
                    <div>
                      <FiveStarRating />
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-100">
                  <Description>
                    J'ai pu essayé le massage qui est extraordinaire au niveau des
                    sensations...plein d'émotions Un lâcher prise d'une heure et demi !!!
                  </Description>
                </div>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                  <div
                    className="rounded-circle d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: '#4f46e5',
                    }}
                  >
                    <span className="fs-1 fw-bolder p-0">R</span>
                  </div>
                  <div className="d-flex flex-column align-items-start ms-4">
                    <div className="card-title fs-5 mb-0">Romain P.</div>
                    <div className="card-title fs-7">
                      <span>
                        34 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Bouguenais
                      </span>
                    </div>
                    <div>
                      <FiveStarRating />
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-100">
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

            <div className="card card-lg border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="d-flex px-0 flex-row align-items-center justify-content-between">
                  <div
                    className="rounded-circle d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: '#4f46e5',
                    }}
                  >
                    <span className="fs-1 fw-bolder p-0">C</span>
                  </div>
                  <div className="d-flex flex-column align-items-start ms-4">
                    <div className="card-title fs-5 mb-0">Carole Q.</div>
                    <div className="card-title fs-7">
                      <span>
                        53 ans, <i className="bi bi-geo-alt fs-6 me-1"></i>Nantes
                      </span>
                    </div>
                    <div>
                      <FiveStarRating />
                    </div>
                  </div>
                </div>
                <div className="pt-4 w-100">
                  <Description>Massage et MASSAGE...</Description>
                  <Description>
                    Massage en institut de beauté : Expérience sympathique sans pour autant être
                    transcendante , au point de revenir régulièrement....
                  </Description>
                  <Description>
                    Et Vrai Massage dont celui tantrique, prodigué par Sandra : une véritable
                    révélation sur votre rapport à votre corps ! Le Massage devient un message de
                    vous à votre propre corps par son intermédiaire.{' '}
                    <i className="bi bi-emoji-smile fs-3 fw-bolder text-light"></i>
                  </Description>
                  <Description>
                    Pour moi, "abîmée" par des brûlures au 3ème degré, une réconciliation avec ma
                    chair : bluffant ! Des zones "anesthésiées" se sont réactivées suite à son
                    massage doux et à la fois puissant. La conscience et l'amour mis dans chacun de
                    ses gestes, mouvements ont véritablement nourri et célébré/honoré mon corps. Je
                    me sens belle dans toutes mes imperfections physiques. J'ai ressenti une forme
                    d'électricité (agréable) me parcourir. Le massage tantrique a continué d'agir
                    sur plusieurs jours, libérant de grosses tensions. Une révélation et prise de
                    conscience sur tout mon corps ! Un voyage extraordinaire à renouveler !
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
