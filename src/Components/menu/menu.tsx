import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import rotas from 'resources/rotas';
import colors from 'resources/colors';
import {Roles} from 'resources/interfaces';
import {TextH2} from 'Components/text';
import {useAuthenticatorContext} from 'context/authetication';
import * as S from './menu.styles';

export type Props = S.PropsMenu & {
  handleLogout: () => void;
};

export const Menu = (props: Props) => {
  const {handleLogout} = props;
  const navigate = useNavigate();
  const {usuario} = useAuthenticatorContext();
  const [telaAtiva, setTelaAtiva] = useState<string>(rotas.AdminPage);

  const handleNavegate = (item: string) => {
    setTelaAtiva(item);
    navigate(item);
  };

  return (
    <S.ContainerNav data-testid={'test_menu'}>
      <S.ContainerContent data-testid={'test_containerContent'}>
        {usuario?.role === Roles.ADMIN && (
          <>
            <S.ItemNav
              isActive={telaAtiva === rotas.AdminPage}
              onClick={() => {
                handleNavegate(rotas.AdminPage);
              }}>
              {telaAtiva === rotas.AdminPage ? (
                <TextH2 peso="bold" cursor="default">
                  Pagina Administrativa
                </TextH2>
              ) : (
                <TextH2 cursor="pointer" cor={colors.lightgray}>
                  Pagina Administrativa
                </TextH2>
              )}
            </S.ItemNav>
            <S.ItemNav
              isActive={telaAtiva === rotas.UserPage}
              onClick={() => {
                handleNavegate(rotas.UserPage);
              }}>
              {telaAtiva === rotas.UserPage ? (
                <TextH2 peso="bold" cursor="default">
                  Cadastrar Usuario
                </TextH2>
              ) : (
                <TextH2 cursor="pointer" cor={colors.lightgray}>
                  Cadastrar Usuario
                </TextH2>
              )}
            </S.ItemNav>
          </>
        )}
        <S.ItemNav
          onClick={() => {
            handleLogout();
          }}>
          <TextH2 cursor="pointer" cor={colors.lightgray}>
            Logout
          </TextH2>
        </S.ItemNav>
      </S.ContainerContent>
    </S.ContainerNav>
  );
};
