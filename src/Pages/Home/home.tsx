import React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './home.styles';

export const Home = () => {
  return (
    <S.Container data-testid={'test_home'}>
      <S.Imagem data-testid={'test_image'} src={manutencao} />
    </S.Container>
  );
};
