import { FC, useMemo } from 'react';
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
  const backgroundImageUrl = '/images/landing-page-background.jpg';
  const computedBackgroundPositionX = 1;
  const computedBackgroundPositionY = -10;
  return (
    <>
      <nav className="navbar navbar-dark sticky-top position-absolute top-0 end-0 w-100">
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
          <button
            className="navbar-toggler pt-1-half border border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            title="Menu"
            aria-label="Menu"
            data-tour-id="step-1"
          >
            <i className="bi bi-list text-white fs-navbar-toggler-1"></i>
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
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              {websiteConfig.websiteShortTitle}
            </h5>
            <button
              id="hamburger-close-button"
              type="button"
              className="btn-close btn-close-white"
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
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Accueil
                    </span>
                  </Link>
                  <Link
                    to="/qui-suis-je"
                    className="text-decoration-none text-light"
                    title="Qui suis-je ?"
                    aria-label="Qui suis-je ?"
                  >
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Qui suis-je ?
                    </span>
                  </Link>
                  <Link to="/temoignages" className="text-decoration-none text-light">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Témoignages
                    </span>
                  </Link>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-3">
                <div className=" w-100 border-bottom border-secondary fs-5 text-dark">
                  Particuliers
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/#">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Séance individuelle
                    </span>
                  </Link>
                </div>
              </li>

              <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-dark d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Mon espace client</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <AccountFullNameBadge />
                  <CreateAccountBadge />
                  <LoginAccountBadge />
                  <LogoutAccountBadge />
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-dark d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Crédits photos</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                    John Doe
                  </span>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-dark d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Confiance numérique</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/mentions-legales">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
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
