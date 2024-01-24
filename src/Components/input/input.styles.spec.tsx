import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from './input.styles';

describe('Input.styles', () => {
  test('ContainerInput DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerInput />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('LabelBox DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.LabelBox />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('InputBox DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.InputBox />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
