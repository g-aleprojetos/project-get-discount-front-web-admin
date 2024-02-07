import React, {useCallback, useEffect} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Input} from 'Components/input';
import {useLogin} from 'hooks/useLogin';
import * as S from './LoginPage.styles';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const {register, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {obter} = useLogin();

  const handleSubmitLogin = useCallback(
    (data: LoginSchema) => {
      const {email, password} = data;
      obter({email, password});
    },
    [obter],
  );

  const handleEsqueceuSenha = useCallback(() => {
    return;
  }, []);

  return (
    <S.Main data-testid={'loginPage'}>
      <S.ContainerEsquerda />
      <S.ContainerDireita>
        <S.Form onSubmit={handleSubmit(handleSubmitLogin)}>
          <S.TextoTitulo>LOGIN</S.TextoTitulo>
          <Input
            testId="input-email"
            label="Seu email"
            tipo="email"
            autoComplete="on"
            placeholder="contato@email.com"
            {...register('email')}
          />
          <Input
            testId="input-senha"
            label="Sua senha"
            tipo="password"
            autoComplete="off"
            placeholder="********"
            {...register('password')}
          />
          <S.ContainerRecuperarSenha>
            <S.ContainerBotaoRecuperaSenha
              data-testid={'botao-recuperar-senha'}
              onClick={handleEsqueceuSenha}>
              <S.TextoRecuperarSenha>Esqueceu sua senha?</S.TextoRecuperarSenha>
            </S.ContainerBotaoRecuperaSenha>
          </S.ContainerRecuperarSenha>
          <S.BotaoEnviar testId="bnt-login">
            <S.TextoBotao>Logar</S.TextoBotao>
          </S.BotaoEnviar>
        </S.Form>
      </S.ContainerDireita>
    </S.Main>
  );
};
