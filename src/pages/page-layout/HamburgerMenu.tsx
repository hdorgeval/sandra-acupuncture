import { FC, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AccountFullNameBadge,
  CreateAccountBadge,
  LoginAccountBadge,
  LogoutAccountBadge,
} from '../../components/auth/MyAccount';
import { websiteConfig } from '../../website.config';

export const HambugerMenu: FC = () => {
  const location = useLocation();
  const isOnHomePage = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);
  const backgroundImageUrl = '/images/backgrounds/offcanvas-burger-2.jpg';
  const computedBackgroundPositionX = 1;
  const computedBackgroundPositionY = 0;

  const windowScrollHandler = (event: Event) => {
    if (!event) {
      return;
    }
    const scrollY = (event?.currentTarget as Window)?.scrollY ?? 0;
    const burgerMenu = document.querySelector('nav#burger-menu');

    if (scrollY > 5 && burgerMenu) {
      burgerMenu.classList.add('navbar-scroll-theme');
      return;
    }
    if (burgerMenu) {
      burgerMenu.classList.remove('navbar-scroll-theme');
    }
  };

  const containerScrollHandler = (event: Event) => {
    if (!event) {
      return;
    }

    const scrollY = (event?.currentTarget as HTMLDivElement)?.scrollTop ?? 0;
    const burgerMenu = document.querySelector('nav#burger-menu');

    if (scrollY > 5 && burgerMenu) {
      burgerMenu.classList.add('navbar-scroll-theme');
      return;
    }
    if (burgerMenu) {
      burgerMenu.classList.remove('navbar-scroll-theme');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', windowScrollHandler);

    const scrollablePageContainer = document.querySelector('#scrollable-page-container');
    if (scrollablePageContainer) {
      scrollablePageContainer?.addEventListener('scroll', containerScrollHandler);
    }
    return () => {
      window.removeEventListener('scroll', windowScrollHandler);
      if (scrollablePageContainer) {
        scrollablePageContainer.removeEventListener('scroll', containerScrollHandler);
      }
    };
  }, []);

  return (
    <>
      <nav
        id="burger-menu"
        className="navbar navbar-dark position-fixed top-0 end-0 w-100 z-index-3"
        data-bs-scroll="true"
      >
        <div
          className={`container-fluid pe-0 me-1 d-flex flex-row ${
            websiteConfig.hamburgerMenuPosition === 'left' ? 'flex-row-reverse' : ''
          }`}
        >
          {isOnHomePage ? (
            <div className="flex-grow-1"></div>
          ) : (
            <Link to="/" className="navbar-brand text-reset" aria-label="Accueil" title="Accueil">
              <i className="bi bi-house-up text-white fs-navbar-toggler-3"></i>
            </Link>
          )}

          <div className="navbar navbar-expand-md flex-fill fw-bolder" id="desktopNavBar">
            <ul className="navbar-nav collapse navbar-collapse">
              <li className="nav-item ms-4 me-4">
                <Link to="/acupuncture" className="nav-link position-relative">
                  <span className="text-light">Acupuncture</span>
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/aculifting" className="nav-link position-relative">
                  <span className="text-light">Aculifting</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link position-relative dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Massage
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/massage-eveil-des-sens" className="dropdown-item">
                      <span className="text-light">Massage Éveil des Sens</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/massage-eveil-divin" className="dropdown-item">
                      <span className="text-light">Massage Éveil Divin</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/massage-eveil-des-sens-quatre-mains" className="dropdown-item">
                      <span className="text-light">Massage Éveil des Sens 4 mains</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/massage-couple" className="dropdown-item">
                      <span className="text-light">Massage Couple</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <button
            id="burger-menu-toggler"
            className="navbar-toggler pt-1-half border border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            title="Menu"
            aria-label="Menu"
            data-tour-id="step-1"
          >
            <i className="bi bi-list text-white fs-navbar-toggler-3"></i>
          </button>
        </div>
      </nav>
      <div
        className={`offcanvas position-absolute text-bg-dark ${
          websiteConfig.hamburgerMenuPosition === 'left' ? 'offcanvas-start' : 'offcanvas-end'
        }`}
        tabIndex={-1}
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
          height: '100vh',
          backgroundPositionX: computedBackgroundPositionX,
          backgroundPositionY: computedBackgroundPositionY,
          backgroundSize: 'cover',
          position: 'relative',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container h-100 overflow-y-scroll">
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title font-weight-700 text-burger-section"
              id="offcanvasDarkNavbarLabel"
            >
              {websiteConfig.websiteShortTitle}
            </h5>
            <button
              id="hamburger-close-button"
              type="button"
              className="btn-close fw-bolder fs-2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body fs-6 pt-0">
            <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
              <li className="nav-item w-100 text-start">
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link
                    to="/"
                    className="text-decoration-none text-light"
                    aria-current="page"
                    title="Accueil"
                    aria-label="Accueil"
                  >
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Accueil
                    </span>
                  </Link>
                  <Link
                    to="/qui-suis-je"
                    className="text-decoration-none text-light"
                    title="Qui suis-je ?"
                    aria-label="Qui suis-je ?"
                  >
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Qui suis-je ?
                    </span>
                  </Link>
                  <Link to="/temoignages" className="text-decoration-none text-light">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Témoignages
                    </span>
                  </Link>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-3">
                <div className=" w-100 border-bottom border-secondary fs-5 font-weight-700 text-burger-section">
                  Mes offres
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/acupuncture">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Acupuncture
                    </span>
                  </Link>
                  <Link to="/aculifting">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Aculifting
                    </span>
                  </Link>
                  <Link to="/massage-eveil-des-sens">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Massage Éveil des Sens
                    </span>
                  </Link>
                  <Link to="/massage-eveil-divin">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Massage Éveil Divin
                    </span>
                  </Link>
                  <Link to="/massage-eveil-des-sens-quatre-mains">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Massage Éveil des Sens 4 mains
                    </span>
                  </Link>
                  <Link to="/massage-couple">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Massage Couple
                    </span>
                  </Link>
                </div>
              </li>
              {websiteConfig.displayAccountButtons && (
                <li className="nav-item w-100 text-start mt-3">
                  <div className="w-100 border-bottom border-secondary fs-6 font-weight-700 text-burger-section d-flex p-1 flex-row flex-wrap align-items-center">
                    <span>Mon espace client</span>
                  </div>
                  <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                    <AccountFullNameBadge />
                    <CreateAccountBadge />
                    <LoginAccountBadge />
                    <LogoutAccountBadge />
                  </div>
                </li>
              )}

              <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 font-weight-700 text-burger-section d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Crédits</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                    web design: Henri d'Orgeval
                  </span>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 font-weight-700 text-burger-section d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Confiance numérique</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/mentions-legales">
                    <span className="badge rounded-pill text-bg-burger-badge fs-7 border border-secondary m-1">
                      Mentions légales
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

HambugerMenu.displayName = 'HambugerMenu';
