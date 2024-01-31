import React, {useCallback, useRef} from 'react';
import {UseFormHandleSubmit, UseFormRegister, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from 'Components/input';
import {Popup} from 'Components/popup';
import colors from 'resources/colors';
import * as S from './formRecoverPassword.styles';

const emailSchema = z.object({
  email: z.string().email(),
});

type EmailSchema = z.infer<typeof emailSchema>;

type Props = {
  handleEsqueceuSenha: () => void;
};

export const FormRecoverPassword = ({handleEsqueceuSenha}: Props) => {
  const {register, handleSubmit} = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitEmail = useCallback((data: EmailSchema) => {
    console.log(data);
  }, []);

  return (
    <RecuperaPassword
      handleEsqueceuSenha={handleEsqueceuSenha}
      register={register}
      handleSubmit={handleSubmit}
      handleSubmitEmail={handleSubmitEmail}
      formRef={formRef}
    />
  );
};

interface RecuperaPasswordProps {
  handleEsqueceuSenha: () => void;
  register: UseFormRegister<EmailSchema>;
  handleSubmit: UseFormHandleSubmit<EmailSchema>;
  handleSubmitEmail: (data: EmailSchema) => void;
  formRef: React.RefObject<HTMLFormElement>;
}

const RecuperaPassword = ({
  handleEsqueceuSenha,
  register,
  handleSubmit,
  handleSubmitEmail,
  formRef,
}: RecuperaPasswordProps) => {
  return (
    <Popup
      textTitle="Recuperar senha"
      aoSair={handleEsqueceuSenha}
      botaoConfirmar={{
        legenda: 'Enviar',
        corTexto: colors.white,
        corBotao: colors.caribbeanGreen,
        aoClicar: () => {
          if (formRef.current) {
            formRef.current.dispatchEvent(
              new Event('submit', {cancelable: true, bubbles: true}),
            );
          }
        },
      }}
      botaoCancelar={{
        legenda: 'Cancelar',
        corTexto: colors.white,
      }}>
      <S.Form ref={formRef} onSubmit={handleSubmit(handleSubmitEmail)}>
        <Input
          testId="input-recuperar-senha"
          placeholder="contato@email.com"
          autoComplete="on"
          tipo="email"
          {...register('email')}
        />
      </S.Form>
    </Popup>
  );
};
