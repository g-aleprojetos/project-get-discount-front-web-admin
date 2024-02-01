import React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './adminPage.styles';

export const AdminPage = () => {
  return (
    <S.Container data-testid={'test-admin-page'}>
      <S.Imagem data-testid={'test_image'} src={manutencao} />
    </S.Container>
  );
};
