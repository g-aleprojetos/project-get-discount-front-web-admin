import styled from 'styled-components';
import cores from 'resources/colors';
import {TextH1, TextH2, TextH5} from 'Components/text';

export interface PropsTelaLoginECadastro
  extends React.AllHTMLAttributes<HTMLElement> {
  tela?: 'Login' | 'Password' | 'Singn Up';
  ativo?: boolean;
}

export const BotaoRecuperaSenha = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  padding: 20px;
  gap: 8px;
  background-color: ${cores.white};
  border-color: ${cores.black};
  border-radius: 20px;
  box-shadow: 0px 30px 80px 3px black;
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cores.lightgray};
`;

export const TextoBotao = styled(TextH2).attrs({
  cursor: 'pointer',
})``;

export const TextoRecuperarSenha = styled(TextH5).attrs({
  cor: cores.black,
  cursor: 'pointer',
})``;

export const TextoTitulo = styled(TextH1).attrs({
  cor: cores.blue,
})``;
