import React, {HTMLInputTypeAttribute, forwardRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

import * as S from './input.styles';
import colors from 'resources/colors';

type EyeIconProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

type Props = S.PropsInput & {
  testId?: string;
  label?: string;
  corlabel?: string;
  value?: string;
  tipo?: HTMLInputTypeAttribute;
  requered?: boolean;
  password?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {testId, label, tipo = 'text', corlabel = colors.blue} = props;

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const tipoPassword = tipo === 'password';
  const tipoInput = tipoPassword ? (mostrarSenha ? 'text' : 'password') : tipo;

  const togglePasswordVisivel = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <S.Container>
      <S.ContainerInput data-testid={testId ?? 'input-pardao'}>
        <S.LabelBox data-testid={testId ? testId + '-label' : 'input-label'}>
          <S.TextoLabel cor={corlabel}>{label}</S.TextoLabel>
          <S.ContainerInputBox>
            <S.Input
              data-testid="input-padrao-box"
              type={tipoInput}
              {...props}
              ref={ref}
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
        </S.LabelBox>
      </S.ContainerInput>
    </S.Container>
  );
});

Input.displayName = 'Input';

const EyeIcon: React.FC<EyeIconProps> = ({isVisible, toggleVisibility}) => {
  return (
    <FontAwesomeIcon
      data-testid={isVisible ? 'icone-olho-aberto' : 'icone-olho-fechado'}
      icon={isVisible ? faEye : faEyeSlash}
      onClick={toggleVisibility}
    />
  );
};
