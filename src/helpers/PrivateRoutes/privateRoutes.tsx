import React from 'react';
import {useLocation, Navigate, Outlet} from 'react-router-dom';
import {useAuthenticatorContext} from 'context/authetication';
import rotas from 'types/rotasAPP';
import {Roles} from 'types/enuns';

export const PrivateRoutes = ({roles}: {roles: Array<Roles>}) => {
  const {usuario} = useAuthenticatorContext();
  const location = useLocation();
  const autorizacao = roles.find(role => role === usuario?.role);
  return autorizacao ? (
    <Outlet />
  ) : usuario ? (
    <Navigate to={rotas.NaoAutorizado} state={{from: location}} replace />
  ) : (
    <Navigate to={rotas.Login} state={{from: location}} replace />
  );
};
