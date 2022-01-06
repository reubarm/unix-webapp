import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Dashboard Routes
    {
      path: 'unix',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/" replace /> },
        // { path: '/unix', element: <PageOne /> },
        { path: 'launchpad', element: <PageTwo /> },
        { path: 'dao', element: <PageThree /> },
        { path: 'roadmap', element: <PageFour /> },
        { path: 'team', element: <PageFive /> },
        { path: 'register', element: <Register /> },
        { path: 'landing', element: <LandingPage /> },
        { path: 'blog', element: <BlogPosts /> },
        { path: 'unix-launch', element: <BlogPost /> },
        { path: 'top-5-games', element: <BlogPost1 /> },
        { path: 'metaverse-crypto', element: <BlogPost2 /> },
        { path: 'metaverse-gaming', element: <BlogPost3 /> },
        { path: 'crypto-gaming', element: <BlogPost4 /> },
        { path: 'is-crypto-gaming-the-future', element: <BlogPost5 /> },
        { path: 'dehorizon-partnership', element: <BlogPost6 /> },
        { path: 'slp-donation', element: <BlogPost7 /> },
        { path: 'thetan-arena', element: <BlogPost8 /> },
        { path: 'alliance-coalition', element: <BlogPost9 /> },
        { path: 'add-game', element: <AddGame /> }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ element: <PageOne /> }]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const Register = Loadable(lazy(() => import('../pages/Register')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const BlogPosts = Loadable(lazy(() => import('../pages/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('../pages/BlogPost')));
const BlogPost1 = Loadable(lazy(() => import('../pages/BlogPost1')));
const BlogPost2 = Loadable(lazy(() => import('../pages/BlogPost2')));
const BlogPost3 = Loadable(lazy(() => import('../pages/BlogPost3')));
const BlogPost4 = Loadable(lazy(() => import('../pages/BlogPost4')));
const BlogPost5 = Loadable(lazy(() => import('../pages/BlogPost5')));
const BlogPost6 = Loadable(lazy(() => import('../pages/BlogPost6')));
const BlogPost7 = Loadable(lazy(() => import('../pages/BlogPost7')));
const BlogPost8 = Loadable(lazy(() => import('../pages/BlogPost8')));
const BlogPost9 = Loadable(lazy(() => import('../pages/BlogPost9')));
const AddGame = Loadable(lazy(() => import('../pages/AddGame')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
