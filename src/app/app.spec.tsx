import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {App} from './app';

describe('App', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<App />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "App"`, () => {
      const app = componente.getByTestId('test_home');
      expect(app).toBeDefined();
    });
  });
});
