import styled from 'styled-components';
import cores from 'resources/colors';
import sizes from 'resources/sizes';
import {TextH2, TextH5} from 'Components/text';
import {Button} from 'Components/button';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  background-color: ${cores.lightgray};
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

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: ${sizes.medium}px;
`;

export const TextoSubtitulo = styled(TextH5)``;

export const TextoTitulo = styled(TextH2).attrs({
  peso: 'bold',
})``;

export const BotaoEnviar = styled(Button).attrs({
  tipo: 'submit',
  cor: cores.CornflowerBlue,
})``;

export const TextoBotao = styled(TextH2).attrs({
  cursor: 'pointer',
  cor: cores.white,
  toUpper: true,
})``;
