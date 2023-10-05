import { useCallback } from 'react';

export type MyAnalyticsEvent =
  | 'appel-telephone'
  | 'contact-form'
  | 'envoie-mail'
  | 'has-completed-guided-tour'
  | 'open-charte-ethique'
  | 'open-external-link'
  | 'open-google-maps'
  | 'open-my-facebook'
  | 'open-my-instagram'
  | 'open-my-linkedin'
  | 'open-my-whatsapp'
  | 'open-my-youtube'
  | 'open-waze'
  | 'rdv-aculifting'
  | 'rdv-acupuncture'
  | 'rdv-form-acupuncture'
  | 'rdv-form-aculifting'
  | 'rdv-form-massage-eveil-des-sens'
  | 'rdv-form-massage-eveil-des-sens-4-mains'
  | 'rdv-entretien-prealable'
  | 'rdv-massage-eveil-des-sens'
  | 'rdv-masage-eveil-divin'
  | 'rdv-ou-contact'
  | 'tel-aculifting'
  | 'tel-acupuncture'
  | 'tel-massage-eveil-des-sens'
  | 'tel-massage-eveil-divin';

export type CommandType = 'js' | 'config' | 'event';
declare global {
  interface Window {
    gtag: (command: CommandType, event: MyAnalyticsEvent, params?: Record<string, string>) => void;
  }
}

export const useAnalytics = () => {
  const trackSimpleEvent = useCallback((myEvent: MyAnalyticsEvent) => {
    try {
      window.gtag('event', myEvent);
    } catch (error) {
      // no op
    }
  }, []);

  const trackOpenExternalLinkEvent = useCallback((url: string) => {
    try {
      window.gtag('event', 'open-external-link', { url });
    } catch (error) {
      // no op
    }
  }, []);
  return { trackSimpleEvent, trackOpenExternalLinkEvent };
};
