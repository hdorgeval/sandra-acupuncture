export interface WebSiteConfig {
  copyrightOwner: string;
  hamburgerMenuPosition: 'left' | 'right';
  socialLinksMenuPosition: 'left' | 'right';
  websiteSubTitle: string;
  websiteTitle: string;
  websiteShortTitle: string;
  websiteUrl: string;
  legalNotice: LegalNotice;
  links: Links;
  displaySocialLinksInFooter: boolean;
  displaySocialLinksViaButton: boolean;
}

export interface LegalNotice {
  lastUpdate: string; // date in ISO format : yyyy/mm/dd
}

export interface Link {
  show: boolean;
  url: string;
  title: string;
  label: string;
}
export interface Links {
  facebook: Link;
  instagram: Link;
  whatsApp: Link;
  youtube: Link;
  email: Link;
  phone: Link;
  linkedin: Link;
}

export const websiteConfig: WebSiteConfig = {
  copyrightOwner: 'Sandra Giraudeau',
  hamburgerMenuPosition: 'left',
  socialLinksMenuPosition: 'right',
  websiteSubTitle: 'Lorem ipsum dolor sit amet',
  websiteTitle: 'Sandra Giraudeau',
  websiteShortTitle: 'Sandra Giraudeau',
  websiteUrl: 'https://mon-site-web.com',
  legalNotice: {
    lastUpdate: '2023/06/21',
  },
  displaySocialLinksInFooter: true,
  displaySocialLinksViaButton: true,
  links: {
    phone: {
      url: '0783649612',
      title: "M'appeler au téléphone",
      label: 'Phone',
      show: true,
    },
    email: {
      url: 'sandramtc44@gmail.com',
      title: "M'envoyer un e-mail",
      label: 'Email',
      show: true,
    },
    youtube: {
      url: 'https://www.youtube.com/channel/0123456789',
      title: 'Voir mes vidéos sur Youtube',
      label: 'Youtube',
      show: true,
    },
    instagram: {
      url: 'https://www.instagram.com/john-doe/?hl=fr',
      title: 'Me contacter sur Instagram',
      label: 'Instagram',
      show: false,
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/sandra-giraudeau-42a771216/',
      title: 'Me contacter sur Linkedin',
      label: 'Linkedin',
      show: true,
    },
    facebook: {
      url: 'https://www.facebook.com/energetiquetraditionnellechinoisesandragiraudeau/',
      title: 'Me contacter sur Facebook',
      label: 'Facebook',
      show: true,
    },
    whatsApp: {
      url: 'https://wa.me/0123456789',
      title: 'Me contacter sur WhatsApp',
      label: 'WhatsApp',
      show: true,
    },
  },
};
