import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

interface AuthState {
  token: string;
  user: IUserData | undefined;
}

export interface SignInCredentials {
  login: string;
  password: string;
}

export interface IUserData {
  id: number;
  nome: string;
  email: string;
  nomeUsuario: string;
  password: string;
  createdAt: string;
}

interface AuthContextData {
  user: IUserData | undefined;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState | null>(() => {
    const token = localStorage.getItem('@APPDec9:token');
    const user = localStorage.getItem('@APPDec9:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.put(
      'http://localhost/API-Rest-Users/Controllers/signIn.php',
      { body: JSON.stringify(login, password) },
      {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': 'https://www.example.com',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        },
      },
    );

    console.log(response.data);

    if (response.data?.token && response.data?.user) {
      const { token, user } = response.data;

      localStorage.setItem('@APPDec9:token', token);
      localStorage.setItem('@APPDec9:user', JSON.stringify(user));

      setData({ token, user });
    } else {
      toast.error(
        <div>
          Acesso negado.
          <br /> Verifique seus dados e tente novamente.
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
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@APPDec9:token');
    localStorage.removeItem('@APPDec9:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
