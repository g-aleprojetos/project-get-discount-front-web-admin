import React, {useState} from 'react';
import {FormLogin} from './formLogin';
import {FormRecoverPassword} from './formRecoverPassword';
import * as S from './LoginPage.styles';

export const LoginPage = () => {
  const [recuperarSenha, setRecuperarSenha] = useState<boolean>(false);

  const handleEsqueceuSenha = () => {
    setRecuperarSenha(prev => !prev);
  };

  return (
    <S.Main data-testid={'loginPage'}>
      <FormLogin handleEsqueceuSenha={handleEsqueceuSenha} />

      {recuperarSenha && (
        <FormRecoverPassword handleEsqueceuSenha={handleEsqueceuSenha} />
      )}
    </S.Main>
  );
};
