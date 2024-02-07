import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import rotas from 'types/rotasAPP';
import {Roles} from 'types/enuns';
import {UserPage} from 'Pages/Userpage';
import {NotAuthorizedPage} from 'Pages/NotAuthorizedPage';
import {NotFoundPage} from 'Pages/NotFoundPage';
import {AdminPage} from 'Pages/AdminPage';
import {LoginPage} from 'Pages/Login';
import {PublicRoutes} from 'helpers/PublicRoutes';
import {PrivateRoutes} from 'helpers/PrivateRoutes';
import {useAuthenticatorContext} from 'context/authetication';
import {Header} from 'Components/header';
import * as S from './app.routes.styles';

export const WebRotas = () => {
  const {autenticado} = useAuthenticatorContext();
  return (
    <S.Container data-testid={'test_rotas'}>
      {autenticado && <Header />}
      <Routes>
        <Route path="/login" element={<PublicRoutes />}>
          <Route path={rotas.Login} element={<LoginPage />} />
        </Route>
        <Route
          path="/"
          element={<PrivateRoutes roles={[Roles.ADMIN, Roles.USER]} />}>
          <Route path={rotas.UserPage} element={<UserPage />} />
          <Route path={rotas.NaoAutorizado} element={<NotAuthorizedPage />} />
          <Route path={rotas.NotFound} element={<NotFoundPage />} />
          <Route path="/" element={<PrivateRoutes roles={[Roles.ADMIN]} />}>
            <Route path={rotas.AdminPage} element={<AdminPage />} />
          </Route>
        </Route>
      </Routes>
    </S.Container>
  );
};
