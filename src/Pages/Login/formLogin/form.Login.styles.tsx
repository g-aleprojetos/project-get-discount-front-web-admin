import styled from 'styled-components';
import cores from 'resources/colors';
import {TextH1, TextH2, TextH3} from 'Components/text';
import sizes from 'resources/sizes';
import {Button} from 'Components/button';

export const BotaoEnviar = styled(Button).attrs({
  tipo: 'submit',
})``;

export const ContainerBotaoRecuperaSenha = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ContainerRecuperarSenha = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: ${sizes.xsmall}px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  padding: 20px;
  gap: ${sizes.xsmall}px;
  background-color: ${cores.white};
  border-color: ${cores.black};
  border-radius: 20px;
  box-shadow: 0px 30px 80px 3px black;
`;

export const TextoBotao = styled(TextH2).attrs({
  cursor: 'pointer',
})``;

export const TextoRecuperarSenha = styled(TextH3).attrs({
  cor: cores.black,
  cursor: 'pointer',
})``;

export const TextoTitulo = styled(TextH1).attrs({
  cor: cores.blue,
})``;
