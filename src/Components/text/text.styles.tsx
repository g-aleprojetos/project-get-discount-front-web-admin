import React from 'react';
import styled from 'styled-components';
import cores from 'resources/colors';

export type Props = {
  id?: string;
  cor?: string;
  fontSize?: string;
  marginTop?: number;
  children?: string | React.ReactNode;
  peso?: 'bold' | 'medium';
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text';
};

const TextoBase = styled.p<Props>`
  font-size: ${props => props.fontSize ?? '12'}px;
  color: ${props => props.cor ?? cores.white};
  margin-top: ${props => props.marginTop ?? 0}px;
  text-transform: ${props => (props.toUpper ? 'uppercase' : 'none')};
  cursor: ${props => props.cursor ?? 'text'};
`;

export const Texto = {
  P: TextoBase,
  H1: TextoBase.withComponent('h1'),
  H2: TextoBase.withComponent('h2'),
  H3: TextoBase.withComponent('h3'),
  H4: TextoBase.withComponent('h4'),
  H5: TextoBase.withComponent('h5'),
  H6: TextoBase.withComponent('h6'),
};
