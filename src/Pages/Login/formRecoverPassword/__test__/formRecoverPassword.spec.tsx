import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {FormRecoverPassword} from '..';

describe('FormRecoverPassword', () => {
  let componente: RenderResult;
  const handleEsqueceuSenhaMock = jest.fn();

  beforeEach(() => {
    componente = render(
      <FormRecoverPassword handleEsqueceuSenha={handleEsqueceuSenhaMock} />,
    );
  });

  describe('Renderização', () => {
    test('DEVE renderizar o icone de fechar', () => {
      const icone = componente.getByTestId('icone-fechar');
      expect(icone).toBeDefined();
    });

    test(`DEVE renderizar o botão de cancelar`, () => {
      const botaoCancelar = componente.getByText('Cancelar');
      expect(botaoCancelar).toBeDefined();
    });

    test(`DEVE renderizar o input de email`, () => {
      const inputEmail = componente.getByTestId('input-recuperar-senha');
      expect(inputEmail).toBeDefined();
    });

    test(`DEVE renderizar o botão de enviar`, () => {
      const botaoEnviar = componente.getByText('Enviar');
      expect(botaoEnviar).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE chamar a função "handleEsqueceuSenha" ao clicar no botão de cancelar', () => {
      const botaoCancelar = componente.getByText('Cancelar');
      fireEvent.click(botaoCancelar);
      expect(handleEsqueceuSenhaMock).toHaveBeenCalledTimes(1);
    });

    test('DEVE chamar a função "handleEsqueceuSenha" ao clicar no icone fechar', () => {
      const iconeFechar = componente.getByTestId('icone-fechar');
      fireEvent.click(iconeFechar);
      expect(handleEsqueceuSenhaMock).toHaveBeenCalledTimes(1);
    });
  });
});
