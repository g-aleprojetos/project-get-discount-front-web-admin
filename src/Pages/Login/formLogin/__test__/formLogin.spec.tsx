import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {FormLogin} from '..';

describe('FormRecoverPassword', () => {
  let componente: RenderResult;
  const handleEsqueceuSenhaMock = jest.fn();

  beforeEach(() => {
    componente = render(
      <FormLogin handleEsqueceuSenha={handleEsqueceuSenhaMock} />,
    );
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o texto Login`, () => {
      const texto = componente.getByText('Login');
      expect(texto).toBeDefined();
    });

    test('DEVE renderizar o label com o texto "Seu email"', () => {
      const label = componente.getByTestId('input-email-label');
      expect(label.textContent).toBe('Seu email');
    });

    test('DEVE renderizar o label com o texto "Sua senha"', () => {
      const label = componente.getByTestId('input-senha-label');
      expect(label.textContent).toBe('Sua senha');
    });

    test(`DEVE renderizar o input de email`, () => {
      const inputEmail = componente.getByTestId('input-email');
      expect(inputEmail).toBeDefined();
    });

    test(`DEVE renderizar o input de senha`, () => {
      const inputSenha = componente.getByTestId('input-senha');
      expect(inputSenha).toBeDefined();
    });

    test(`DEVE renderizar o botão de login`, () => {
      const botaoLogin = componente.getByTestId('bnt-login');
      expect(botaoLogin).toBeDefined();
    });

    test(`DEVE renderizar o texto do botão de login`, () => {
      const textoBotaoLogin = componente.getByText('Logar');
      expect(textoBotaoLogin).toBeDefined();
    });

    test(`DEVE renderizar o botão de recuperar senha`, () => {
      const botaoRecuperarSenha = componente.getByTestId(
        'botao-recuperar-senha',
      );
      expect(botaoRecuperarSenha).toBeDefined();
    });

    test(`DEVE renderizar o texto do botão de recuperar senha`, () => {
      const textoBotaoRecuperarSenha = componente.getByText(
        'Esqueceu sua senha?',
      );
      expect(textoBotaoRecuperarSenha).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE chamar a função "handleEsqueceuSenha" ao clicar no botão de recuperar senha', () => {
      const botaoRecuperarSenha = componente.getByTestId(
        'botao-recuperar-senha',
      );
      fireEvent.click(botaoRecuperarSenha);
      expect(handleEsqueceuSenhaMock).toHaveBeenCalledTimes(1);
    });
  });
});
