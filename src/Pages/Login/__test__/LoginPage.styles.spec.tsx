import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../LoginPage.styles';

describe('LoginPage.styles', () => {
  test('BotaoRecuperaSenha DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.BotaoRecuperaSenha />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Form DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Form />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Main DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Main />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('TextoBotao DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.TextoBotao />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('TextoRecuperarSenha DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.TextoRecuperarSenha />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('TextoTitulo DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.TextoTitulo />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
