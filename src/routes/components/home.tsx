import React, { lazy } from 'react';

const Login = lazy(() => import('../../pages/Login'));
const Home = lazy(() => import('../../pages/Home'));
const NewUser = lazy(() => import('../../pages/NewUser'));

interface IRoutes {
  path: string[];
  component: React.FC;
  isPrivate?: boolean;
  exact?: boolean;
  isRestricted?: boolean;
}

const AppRoutes: IRoutes[] = [
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
    path: ['/newUser'],
    component: NewUser,
    exact: true,
  },
  {
    path: ['/home'],
    component: Home,
    isPrivate: true,
    exact: true,
  },
];

export default AppRoutes;
