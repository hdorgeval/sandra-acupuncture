import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCalendar } from '../../hooks/useCalendar';
import { websiteConfig } from '../../website.config';
import { SocialLinksHorizontalBar } from './SocialLinksHorizontalBar';
import { SocialLinksVerticalNavBar } from './SocialLinksVerticalNavBar';
export const Footer: FC = () => {
  const { currentYear } = useCalendar();

  return (
    <footer className="">
      <div className="d-flex flex-column align-items-center">
        {websiteConfig.displaySocialLinksInFooter && <SocialLinksHorizontalBar />}
        {websiteConfig.displaySocialLinksViaButton && <SocialLinksVerticalNavBar />}

        <span className="fs-7 fw-lighter mb-1">
          <i className="bi bi-c-circle me-2"></i>
          {`tous droits réservés ${websiteConfig.copyrightOwner} - ${currentYear}`}
        </span>
        <span className="fs-7 mb-2">
          <Link to="/mentions-legales" className="nav-link">
            <span className="">Mentions légales</span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
