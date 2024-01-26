import React, {HTMLInputTypeAttribute, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

import * as S from './input.styles';

type EyeIconProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

type Props = S.PropsInput & {
  testId?: string;
  label?: string;
  value?: string;
  tipo?: HTMLInputTypeAttribute;
  requered?: boolean;
  password?: boolean;
  handleOnchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: Props) => {
  const {
    testId,
    label,
    id,
    value,
    tipo = 'text',
    requered,
    handleOnchange,
  } = props;

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const tipoPassword = tipo === 'password';
  const tipoInput = tipoPassword ? (mostrarSenha ? 'text' : 'password') : tipo;

  const togglePasswordVisivel = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <S.Container>
      <S.ContainerInput data-testid={testId ?? 'input-pardao'}>
        <S.LabelBox data-testid="input-label" htmlFor={id}>
          {label}
        </S.LabelBox>
        <S.ContainerInputBox>
          <S.Input
            data-testid="input-padrao-box"
            id={id}
            type={tipoInput}
            value={value}
            required={requered === true ? true : false}
            onChange={event => {
              handleOnchange(event);
            }}
            {...props}
          />
          {tipoPassword && (
            <S.MostrarSenha>
              <EyeIcon
                isVisible={mostrarSenha}
                toggleVisibility={togglePasswordVisivel}
              />
            </S.MostrarSenha>
          )}
        </S.ContainerInputBox>
      </S.ContainerInput>
    </S.Container>
  );
};

const EyeIcon: React.FC<EyeIconProps> = ({isVisible, toggleVisibility}) => {
  return (
    <FontAwesomeIcon
      data-testid={isVisible ? 'icone-olho-aberto' : 'icone-olho-fechado'}
      icon={isVisible ? faEye : faEyeSlash}
      onClick={toggleVisibility}
    />
  );
};
