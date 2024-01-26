import styled from 'styled-components';
import cores from 'resources/colors';

export type PropsInput = React.InputHTMLAttributes<HTMLInputElement>;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 2px;
  border: 1px solid ${cores.shuttleGray};
`;

export const LabelBox = styled.label`
  margin-left: 10px;
  font-size: 12px;
  color: ${cores.blue};
`;

export const Input = styled.input`
  display: flex;
  height: 30px;
  width: 100%;
  padding: 8px 0;
  text-indent: 8px;
  font-size: 16px;
  border: none;
  background-color: ${cores.white};
  color: ${cores.black};
  outline: 0;
`;

export const MostrarSenha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  height: 30px;
  cursor: pointer;
`;
