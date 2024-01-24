import React from 'react';
import * as S from './input.styles';

type Props = S.PropsInput & {
  testId?: string;
  label?: string;
  value?: string;
  requered?: boolean;
  handleOnchange: (event: string) => void;
};

export const Input = (props: Props) => {
  const {testId, label, id, value, requered = false, handleOnchange} = props;

  return (
    <S.ContainerInput data-testid={testId ?? 'input-pardao'}>
      <S.LabelBox data-testid="input-label" htmlFor={id}>
        {label}
      </S.LabelBox>
      <S.InputBox
        data-testid="input-padrao-box"
        id={id}
        value={value}
        required={requered === true ? true : false}
        onChange={event => {
          handleOnchange(event.currentTarget?.value);
        }}
        {...props}
      />
    </S.ContainerInput>
  );
};
