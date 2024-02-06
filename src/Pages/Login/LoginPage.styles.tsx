import styled from 'styled-components';
import cores from 'resources/colors';
import sizes from 'resources/sizes';
import {TextH1, TextH2, TextH3} from 'Components/text';
import {Button} from 'Components/button';

export const BotaoEnviar = styled(Button).attrs({
  tipo: 'submit',
  cor: cores.CornflowerBlue,
})``;

export const ContainerBotaoRecuperaSenha = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ContainerDireita = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerEsquerda = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: ${cores.mediumBlue};
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
  border-color: ${cores.black};
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  background-color: ${cores.lightgray};
`;

export const TextoBotao = styled(TextH2).attrs({
  cursor: 'pointer',
  cor: cores.white,
})``;

export const TextoRecuperarSenha = styled(TextH3).attrs({
  cor: cores.black,
  cursor: 'pointer',
})``;

export const TextoTitulo = styled(TextH1).attrs({
  peso: 'bold',
})``;
