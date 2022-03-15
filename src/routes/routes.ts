import React, { lazy } from 'react';

interface IRoutes {
    path: string[];
    component: React.FC;
    isPrivate?: boolean;
    exact?: boolean;
    isRestricted?: boolean;
}

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

const login: IRoutes[] = [
    {
      path: ['/login'],
      component: Login,
      exact: true,
    },
];

const home: IRoutes[] = [
    {
        path: ['/'],
        component: Home,
        isPrivate: true,
        exact: true,
      },
];

const routes = home.concat(login);

export default routes;


