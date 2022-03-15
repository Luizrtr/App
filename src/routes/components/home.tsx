import React, { lazy } from 'react';

const Login = lazy(() => import('../../pages/Login'));
const Home = lazy(() => import('../../pages/Home'));

interface IRoutes {
  path: string[];
  component: React.FC;
  isPrivate?: boolean;
  exact?: boolean;
  isRestricted?: boolean;
}

const fluss: IRoutes[] = [
  {
    path: ['/'],
    component: Login,
    isPrivate: true,
    exact: true,
  },
  {
    path: ['/login'],
    component: Login,
    exact: true,
  },
  {
    path: ['/home'],
    component: Home,
    isPrivate: true,
    exact: true,
  },
];

export default fluss;
