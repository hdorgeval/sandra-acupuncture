import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
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
