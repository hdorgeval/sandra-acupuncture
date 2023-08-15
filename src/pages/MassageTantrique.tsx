import { FC } from 'react';
import { Link } from 'react-router-dom';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';

export const MassageTantrique: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/massage-background.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(79, 79, 93, 0.40),rgba(0, 0, 0, 0.1))"
        backgroundPositionX="60%"
        backgroundPositionY="33%"
        htmlTitle={`Massage tantrique | ${websiteConfig.websiteTitle}`}
      >
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="mt-7">
            <PageTitle>Massage tantrique</PageTitle>
          </div>
          <div className="" style={{ minHeight: '7vh' }}></div>
          <SemiTransparentTile
            background="linear-gradient(rgb(17, 51, 97, 0.6), rgba(79, 79, 93, 0.3))"
            className="card text-start text-light fs-2 font-monserrat px-4 py-4"
          >
            <p className="">Tout d'abord, qu'est ce que le TANTRA ?</p>
            <p>
              Le tantra s'est développé en Inde et particulièrement dans la région du Cachemire au
              5me siècle.
            </p>
            <p>C'est un chemin d'éveil vers la connaissance et l'amour de soi.</p>
            <p>
              Le mot tantra est composé de deux mots sanskrits « Tanoti » qui signifie expansion et
              « Trayati » qui est la libération.
            </p>
            <p>
              Autrement dit, le tantra se définit comme une voie d'expansion de la conscience et de
              la libération de l'être.
            </p>
            <p>
              Les principaux outils utilisés dans le tantra sont les massages, la respiration, le
              yoga, la méditation, la danse.
            </p>
            <p>
              C'est le corps qui est à l'honneur dans le tantra, il va vous permettre d'aller à
              votre propre rencontre, votre nature divine.
            </p>
            <p>
              Dans nos sociétés modernes, nous accordons beaucoup d'importance à notre habitation,
              notre voiture… mais nous oublions très souvent d'entretenir notre véhicule terrestre :
              notre corps.
            </p>
            <p>Et malheureusement, nous nous occupons de lui lorsqu'il est fatigué, malmené.</p>
            <p>Prendre soin de lui, c'est le respecter, l'aimer, l'honorer.</p>
            <p>
              Se rencontrer permet de rencontrer l'autre, les autres, le monde. Le tantra vous
              invite à lâcher prise, pour être tout simplement dans l'instant présent sans jugement.
            </p>
            <p>
              L'expérience du tantra m'a fait prendre conscience que le plus beau cadeau que l'on
              puisse se faire c'est la LIBERTE D'ETRE SOI. En nous libérant de nos parties blessées
              pour les mettre en lumière et les transmuter nous ouvrons notre conscience pour nous
              reconnecter à notre essence.
            </p>
            <p className="">Le tantra ne se raconte pas, il se vit.</p>
            <p className="mb-0 pb-0">Je propose différents types de massages tantriques :</p>

            <div className="d-flex flex-column align-items-center pt-4">
              <Link to="/massage-eveil-des-sens">
                <span className="badge rounded-pill text-bg-dark border border-secondary m-1">
                  Le massage Éveil des Sens
                </span>
              </Link>
              <Link to="/massage-eveil-divin">
                <span className="badge rounded-pill text-bg-dark border border-secondary m-1">
                  Le massage Éveil Divin
                </span>
              </Link>
              <Link to="/massage-eveil-des-sens-quatre-mains">
                <span className="badge rounded-pill text-bg-dark border border-secondary m-1">
                  Le massage Éveil des Sens 4 mains
                </span>
              </Link>
              <Link to="/massage-couple">
                <span className="badge rounded-pill text-bg-dark border border-secondary m-1">
                  Le massage Couple
                </span>
              </Link>
            </div>
          </SemiTransparentTile>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

MassageTantrique.displayName = 'MassageTantrique';
