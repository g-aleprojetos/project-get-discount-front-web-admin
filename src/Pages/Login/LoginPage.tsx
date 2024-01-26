import React, {useCallback} from 'react';
import {Button} from 'Components/button';
import {Input} from 'Components/input';
import * as S from './LoginPage.styles';

export const LoginPage = () => {
  const [login, setLogin] = React.useState({email: '', senha: ''});

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      return login;
    },
    [login],
  );

  const handleEsqueceuSenha = useCallback(() => {
    return 'recuperar senha';
  }, []);

  return (
    <S.Main data-testid={'loginPage'}>
      <S.Form
        autoComplete="off"
        data-testid={'loginPage-form'}
        onSubmit={handleSubmit}>
        <S.TextoTitulo>Login</S.TextoTitulo>
        <Input
          id="email"
          testId="input-email"
          label="Seu email"
          placeholder="contato@email.com"
          tipo="email"
          value={login.email}
          handleOnchange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLogin({...login, email: event.target.value})
          }
        />
        <Input
          id="senha"
          testId="input-senha"
          label="Sua senha"
          placeholder="*********"
          tipo="password"
          value={login.senha}
          handleOnchange={event =>
            setLogin({...login, senha: event.target.value})
          }
        />
        <Button testId="bnt-login" tipo="submit">
          <S.TextoBotao>Logar</S.TextoBotao>
        </Button>
        <S.BotaoRecuperaSenha
          data-testid={'botao-recuperar-senha'}
          onClick={handleEsqueceuSenha}>
          <S.TextoRecuperarSenha>Esqueceu sua senha?</S.TextoRecuperarSenha>
        </S.BotaoRecuperaSenha>
      </S.Form>
    </S.Main>
  );
};
