import React, {useCallback} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Input} from 'Components/input';
import * as S from './form.Login.styles';

const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(8),
});

type LoginSchema = z.infer<typeof loginSchema>;

type Props = {
  handleEsqueceuSenha: () => void;
};

export const FormLogin = ({handleEsqueceuSenha}: Props) => {
  const {register, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitLogin = useCallback((data: LoginSchema) => {
    console.log('login');
    console.log(data);
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitLogin)}>
      <S.TextoTitulo>Login</S.TextoTitulo>
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
        {...register('senha')}
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
  );
};
