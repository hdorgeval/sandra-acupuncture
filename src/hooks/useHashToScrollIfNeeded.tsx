import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const useHashToScrollIfNeeded = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el?.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
  }, [location, location.hash]);
};
