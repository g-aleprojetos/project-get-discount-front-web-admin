import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../formRecoverPassword.styles';

describe('formRecoverPassword.styles', () => {
  test('Form DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Form />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
