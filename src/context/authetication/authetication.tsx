import React, {createContext, ReactNode, useContext, useState} from 'react';
import {jwtDecode} from 'jwt-decode';
import {ILoginResponse, IUser, Roles} from 'resources/interfaces';

interface IAccessToken {
  sub: string;
  nome: string;
  role: Roles;
  exp: number;
  iat: number;
}

type AutenticadorContext = {
  autenticado: boolean;
  usuario: IUser | undefined;
  handleAutenticado: (_item: ILoginResponse) => void;
};

type BackgroundProvider = {
  children: ReactNode;
};

export const AutenticadoContext = createContext({} as AutenticadorContext);

export const AutenticadoProvide = ({children}: BackgroundProvider) => {
  const [auth, setAuth] = useState<ILoginResponse>();
  const [usuario, setUsuario] = useState<IUser>();
  const handleAutenticado = (token: ILoginResponse) => {
    setAuth(token);
    const accessToken: IAccessToken = jwtDecode(token.accessToken);
    setUsuario({
      id: accessToken.sub,
      nome: accessToken.nome,
      role: accessToken.role,
    });
    localStorage.setItem('tokens', JSON.stringify(accessToken));
    localStorage.setItem(
      'user',
      JSON.stringify({nome: accessToken.nome, role: accessToken.role}),
    );
  };

  return (
    <AutenticadoContext.Provider
      value={{
        autenticado: auth?.auth ? auth?.auth : false,
        usuario,
        handleAutenticado,
      }}>
      {children}
    </AutenticadoContext.Provider>
  );
};
export function useAuthenticatorContext() {
  return useContext(AutenticadoContext);
}
