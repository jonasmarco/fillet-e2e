import React, {Suspense} from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import appConfig from '@config/App';

import ApplicationLayout from '@views/layouts/ApplicationLayout';

import Loading from '@components/loading';

const LoginView = React.lazy(() => import('@views/login'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [{index: true, element: <LoginView />}],
  },
];

const router = createBrowserRouter(routes, {basename: appConfig.path});

export default () => (
  <Suspense fallback={<Loading overlay visible />}>
    <RouterProvider router={router} />
  </Suspense>
);
