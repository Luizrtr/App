/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isRestricted?: boolean;
  component: React.ComponentType;
}

interface IToken {
  exp: number;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isRestricted = true,
  component: Component,
  ...rest
}) => {
  const { user, signOut } = useAuth();
  const locationHref = useLocation().pathname;
  const history = useHistory();
  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('@BMBTechHello:token');

    if (token === null && isPrivate !== !!user) {
      history.push('/login');
    }

    if (token) {
      const decoded = jwtDecode<IToken>(token);

      if (decoded && decoded.exp * 1000 < Date.now()) {
        toast.info(
          <div>
            Seu acesso expirou.
            <br />
            Você está sendo deslogado.
          </div>,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );

        setTimeout(() => {
          signOut();

          history.push('/login');
        }, 1000);
      }
    }

    setIsAuth(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signOut, locationHref]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }: any) => {
        return isPrivate === !!user
          ? [
              (isAuth || location.pathname.includes('/login', undefined)) ? (
                  <Component key={uuid()} />
              ) : (
                <div> Error 401</div>
              ),
            ]
          : [
              isRestricted ? (
                <Redirect
                  to={{
                    pathname: isPrivate ? '/login' : '/home',
                    state: { from: location },
                  }}
                />
              ) : (
                <Component key={uuid()} />
              ),
            ];
      }}
    />
  );
};

export default Route;
