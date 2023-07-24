import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { Aculifting } from './pages/Aculifting';
import { Acupuncture } from './pages/Acupuncture';
import { EnergetiqueTraditionnelleChinoise } from './pages/EnergetiqueTraditionnelleChinoise';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { MassageEveilDesSens } from './pages/MassageEveilDesSens';
import { MassageTuina } from './pages/MassageTuina';
import { MentionsLegales } from './pages/MentionsLegales';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { SoinsDouleurMedecineChinoise } from './pages/SoinsDouleurMedecineChinoise';
import { SoinsOncologieMedecineChinoise } from './pages/SoinsOncologieMedecineChinoise';
import { SoinsUroGenitaleMedecineChinoise } from './pages/SoinsUroGenitaleMedecineChinoise';
import { Temoignages } from './pages/Temoignages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/qui-suis-je',
    element: <QuiSuisJe />,
  },
  {
    path: '/temoignages',
    element: <Temoignages />,
  },
  {
    path: '/energetique-traditionnelle-chinoise',
    element: <EnergetiqueTraditionnelleChinoise />,
  },
  {
    path: '/soins-douleur-medecine-chinoise',
    element: <SoinsDouleurMedecineChinoise />,
  },
  {
    path: '/soins-urogenitale-medecine-chinoise',
    element: <SoinsUroGenitaleMedecineChinoise />,
  },
  {
    path: '/soins-oncologie-medecine-chinoise',
    element: <SoinsOncologieMedecineChinoise />,
  },
  {
    path: '/aculifting',
    element: <Aculifting />,
  },
  {
    path: '/acupuncture',
    element: <Acupuncture />,
  },
  {
    path: '/massage-tuina',
    element: <MassageTuina />,
  },
  {
    path: '/massage-eveil-des-sens',
    element: <MassageEveilDesSens />,
  },
]);

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
