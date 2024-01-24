import styled from 'styled-components';
import cores from 'resources/colors';

export type PropsInput = React.InputHTMLAttributes<HTMLInputElement>;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const LabelBox = styled.label`
  margin-left: 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${cores.shuttleGray};
`;

export const InputBox = styled.input`
  height: 30px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 16px;
  background-color: ${cores.shuttleGray};
  color: ${cores.white};
  outline: 0;
`;
