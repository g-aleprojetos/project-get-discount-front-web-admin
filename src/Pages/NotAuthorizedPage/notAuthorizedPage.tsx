import React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './notAuthorizedPage.styles';

export const NotAuthorizedPage = () => {
  return (
    <S.Container data-testid={'test-notAuthorized-page'}>
      <S.Imagem data-testid={'test_image'} src={manutencao} />
    </S.Container>
  );
};
