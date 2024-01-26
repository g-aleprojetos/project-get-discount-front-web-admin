import React from 'react';

import {Texto, Props} from './text.styles';

export function TextH1(props: Props) {
  return <Texto.H1 {...props} />;
}

export function TextH2(props: Props) {
  return <Texto.H2 {...props} />;
}

export function TextH3(props: Props) {
  return <Texto.H3 {...props} />;
}

export function TextH4(props: Props) {
  return <Texto.H4 {...props} />;
}

export function TextH5(props: Props) {
  return <Texto.H5 {...props} />;
}

export function TextH6(props: Props) {
  return <Texto.H6 {...props} />;
}

export function TextP(props: Props) {
  return <Texto.P {...props} />;
}
