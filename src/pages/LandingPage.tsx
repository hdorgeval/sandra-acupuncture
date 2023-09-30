import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
import { Question } from '../components/Question';
import { Quote } from '../components/Quote';
import { websiteConfig } from '../website.config';
import { PublicPageLayout } from './page-layout/PublicPageLayout';
export const LandingPage: FC = () => {
  const nextSlideButtonRef = useRef<HTMLButtonElement>(null);
  const slideSHowIntervalInMilliseconds = 5000;
  useEffect(() => {
    setTimeout(() => {
      if (nextSlideButtonRef && nextSlideButtonRef.current) {
        nextSlideButtonRef.current?.click();
      }
    }, slideSHowIntervalInMilliseconds);
  }, []);
  return (
    <>
      <PublicPageLayout htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}>
        <section
          id="home"
          className="w-100"
          data-bs-target="#navbarSupportedContent"
          style={{ maxHeight: '100vh' }}
        >
          <div
            id="home-carousel"
            className="carousel slide carousel-fade w-100"
            data-bs-ride="carousel"
            data-bs-pause="false"
            data-bs-interval={slideSHowIntervalInMilliseconds}
            data-bs-theme="dark"
          >
            <div className="carousel-indicators mb-0">
              <button
                className="active bg-white pt-1"
                type="button"
                data-bs-target="#home-carousel"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                className="ms-4 bg-white pt-1"
                type="button"
                data-bs-target="#home-carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ref={nextSlideButtonRef}
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="bg-overlay-30"
                  style={{
                    backgroundImage: 'url(/images/backgrounds/landing-page-1.png)',
                    minHeight: '100vh',
                    maxHeight: '100vh',
                    backgroundPositionX: '25%',
                    backgroundPositionY: '29%',
                    backgroundSize: 'cover',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                  }}
                >
                  <div
                    className="d-flex flex-column justify-content-start align-items-center"
                    style={{ height: '100vh' }}
                  >
                    <div className="flex-grow-half"></div>
                    <h1 className="font-mali text-light fs-1 fw-bolder max-vw-80">
                      Besoin de soulager votre corps
                    </h1>
                    <h1 className="font-mali text-light fs-1 fw-bolder max-vw-80">
                      Besoin d'avoir plus d'énergie
                    </h1>
                    <h2 className="font-mali text-light fw-bolder fs-3 max-vw-80 mt-4">
                      Avec l'Énergétique Traditionnelle Chinoise et le massage tantrique
                    </h2>

                    <a
                      className="btn btn-outline-light fw-bolder w-75 mt-4 font-dancing-script fs-big-1"
                      href="#bienvenue"
                    >
                      Bienvenue !
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="bg-overlay-40"
                  style={{
                    backgroundImage: 'url(/images/backgrounds/landing-page-2.jpg)',
                    minHeight: '100vh',
                    maxHeight: '100vh',
                    backgroundPositionX: '45%',
                    backgroundPositionY: '29%',
                    backgroundSize: 'cover',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                  }}
                >
                  <div
                    className="d-flex flex-column justify-content-start align-items-center"
                    style={{ height: '100vh' }}
                  >
                    <div className="flex-grow-half"></div>
                    <h1 className="font-mali text-light fs-1 fw-bolder max-vw-80">
                      Besoin de soulager votre corps
                    </h1>
                    <h1 className="font-mali text-light fs-1 fw-bolder max-vw-80">
                      Besoin d'avoir plus d'énergie
                    </h1>
                    <h2 className="font-mali text-light fw-bolder fs-3 max-vw-80 mt-4">
                      Avec l'Énergétique Traditionnelle Chinoise et le massage tantrique
                    </h2>

                    <a
                      className="btn btn-outline-light fw-bolder w-75 mt-4 font-dancing-script fs-big-1 wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                      href="#bienvenue"
                    >
                      Bienvenue !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="bienvenue"
          data-bs-target="#navbarSupportedContent"
          className="w-100 bg-overlay-50"
          style={{
            backgroundImage: 'url(/images/backgrounds/section-bienvenue.png)',
            minHeight: '100vh',
            backgroundPositionX: '39%',
            backgroundPositionY: '29%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div className="container">
            <div className="d-flex flex-column text-start text-light font-dancing-script fs-3 py-4">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="border-photo">
                  <img
                    className="object-fit-fill rounded-circle img-thumbnail p-0 border-0 "
                    src="/images/portraits/portrait-sandra-giraudeau.png"
                    alt="Portrait Sandra Giraudeau"
                    style={{ width: '8rem', minWidth: '8rem' }}
                  />
                </div>
                <div className="w-100 ms-4">Je suis Sandra Giraudeau</div>
              </div>
              <Description>
                Je vous reçois dans mon cabinet situé à la Montagne, au sud-ouest de Nantes, du
                lundi au vendredi de 8h30 à 19h, et du samedi de 8h30 à 12h. Praticienne en
                énergétique traditionnelle chinoise, je suis à votre écoute pour vous apporter le
                soulagement et l'harmonie dont vous avez besoin par les techniques d'acupuncture et
                par des massages TuiNa et tantriques.
              </Description>
              <Link
                to="/qui-suis-je"
                className="text-decoration-none text-light"
                title="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
                aria-label="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
              >
                <span className="btn btn-outline-light fw-bolder my-4 font-playfair">
                  En savoir plus
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="services-1"
          data-bs-target="#navbarSupportedContent"
          className="w-100 bg-overlay-30"
          style={{
            backgroundImage: 'url(/images/backgrounds/landing-page-1.png)',
            minHeight: '100vh',
            backgroundPositionX: '39%',
            backgroundPositionY: '29%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2  bg-transparent">
              <div className="card-body">
                <Question
                  sentence="L'OMS reconnaît l'énergétique traditionnelle
                chinoise comme une approche de traitement efficace pour un large éventail de
                problèmes de santé."
                  answer="L'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements
                médicaux traditionnels."
                  answerClassname="text-white mb-6"
                />
                <Link
                  to="/energetique-traditionnelle-chinoise"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut être utilisée en complément d'autres traitements médicaux traditionnels."
                >
                  <span className="btn btn-outline-light fw-bolder m-4 position-absolute bottom-0 start-0 font-playfair">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <Question
                  sentence="Vous avez des douleurs ou des migraines recurrentes ?"
                  answer="L'énergétique traditionnelle chinoise peut vous aider"
                  answerClassname="text-white mb-6"
                />
                <Link
                  to="/soins-douleur-medecine-chinoise"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager mes douleurs ou mes migraines"
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager mes douleurs ou mes migraines"
                >
                  <span className="btn btn-outline-light fw-bolder m-4 position-absolute bottom-0 start-0 font-playfair">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <Question
                  sentence="Règles douloureuses, troubles de la ménopause ?"
                  answer="L'énergétique traditionnelle chinoise peut vous aider"
                  answerClassname="text-white mb-6"
                />
                <Link
                  to="/soins-urogenitale-medecine-chinoise"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les troubles uro-génitaux"
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les troubles uro-génitaux"
                >
                  <span className="btn btn-outline-light fw-bolder m-4 position-absolute bottom-0 start-0 font-playfair">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <Question
                  sentence="Vous voulez soulager les effets secondaires de votre traitement contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit ?"
                  answer="L'énergétique traditionnelle chinoise peut vous aider"
                  answerClassname="text-white mb-6"
                />
                <Link
                  to="/soins-oncologie-medecine-chinoise"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les effets secondaires des traitements contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit"
                  aria-label="En savoir plus sur comment l'énergétique traditionnelle chinoise peut soulager les effets secondaires des traitements contre le cancer tels que les nausées, les vomissements, la fatigue, les douleurs, les troubles du sommeil et les troubles de l'appétit"
                >
                  <span className="btn btn-outline-light fw-bolder m-4 position-absolute bottom-0 start-0 font-playfair">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <Question
                  sentence="Vous voulez redonner de l'éclat à votre visage ?"
                  answer="L'aculifting vous permet de rajeunir naturellement votre peau"
                  answerClassname="text-white mb-6"
                />
                <Link
                  to="/aculifting"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur comment l'aculifting peut vous aider à rajeunir naturellement votre peau en lui donnant plus d'éclat et plus de fermeté."
                  aria-label="En savoir plus sur comment l'aculifting peut vous aider à rajeunir naturellement votre peau en lui donnant plus d'éclat et plus de fermeté."
                >
                  <span className="btn btn-outline-light fw-bolder m-4 position-absolute bottom-0 start-0 font-playfair">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services-2"
          data-bs-target="#navbarSupportedContent"
          className="w-100 bg-overlay-40"
          style={{
            backgroundImage: 'url(/images/backgrounds/landing-page-2.jpg)',
            minHeight: '50vh',
            backgroundPositionX: '39%',
            backgroundPositionY: '29%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <Question
                  sentence="Vous voulez cheminer vers vôtre être intérieur ?"
                  answer="Le massage tantrique est une voie d'exploration méditative"
                  answerClassname="text-white mb-6"
                />
                <Link
                  to="/massage-tantrique"
                  className="text-decoration-none text-light"
                  title="En savoir plus sur le massage tantrique"
                  aria-label="En savoir plus sur le massage tantrique"
                >
                  <span className="btn btn-outline-light fw-bolder m-4 position-absolute bottom-0 start-0 font-playfair">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonies"
          data-bs-target="#navbarSupportedContent"
          className="w-100"
          style={{
            backgroundImage: 'url(/images/backgrounds/section-testimonies.jpg)',
            minHeight: '75vh',
            backgroundPositionX: '39%',
            backgroundPositionY: '29%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
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

            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
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
        </section>

        <section
          id="quotes"
          data-bs-target="#navbarSupportedContent"
          className="w-100"
          style={{
            backgroundImage: 'url(/images/backgrounds/section-testimonies.jpg)',
            minHeight: '33vh',
            backgroundPositionX: '39%',
            backgroundPositionY: '29%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
            <div className="card border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <Quote
                  sentence="Si tu écoutes ton corps quand il te chuchote, tu n'auras pas à l'entendre crier."
                  author="Sagesse Tibétaine"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-bs-target="#navbarSupportedContent"
          className="w-100"
          style={{
            backgroundImage: 'url(/images/backgrounds/section-contact.jpg)',
            minHeight: '100vh',
            backgroundPositionX: '29%',
            backgroundPositionY: '29%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div className="container-fluid py-2 px-0 pb-0">
            <div className="card card-sm border border-light border-opacity-50 text-start text-light font-playfair m-2 bg-transparent">
              <div className="card-body">
                <ContactForm analyticsEvent="contact-form" />
              </div>
            </div>
          </div>
        </section>
      </PublicPageLayout>
    </>
  );
};

LandingPage.displayName = 'LandingPage';
