import styled from 'styled-components';
import cores from 'resources/colors';

export interface PropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tipo?: 'fechar' | 'cancelar' | 'confirmar' | 'ok' | 'submit';
}

export const Container = styled.div`
  margin: 15px;
`;

export const ContainerButton = styled.button<PropsButton>`
  background-color: ${p =>
    p.tipo === 'fechar'
      ? 'transparent'
      : p.tipo === 'cancelar' || p.tipo === 'confirmar' || p.tipo === 'ok'
      ? cores.shuttleGray
      : cores.caribbeanGreen};
  border-radius: ${p => (p.tipo === 'fechar' ? 'none' : '8px')};
  border-style: none;
  padding: ${p => (p.tipo === 'fechar' ? 'none' : '8px 60px')};
  cursor: pointer;
`;
