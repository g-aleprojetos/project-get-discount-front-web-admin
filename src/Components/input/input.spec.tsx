import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Input} from './input';

describe('Input', () => {
  let componente: RenderResult;
  const labelmock = 'textoLabel';
  const handleOnchange = jest.fn();

  beforeEach(() => {
    componente = render(
      <Input label={labelmock} handleOnchange={handleOnchange} />,
    );
  });

  describe('Renderização', () => {
    test('DEVE renderizar o componente "Input"', () => {
      const botao = componente.getByTestId('input-pardao');
      expect(botao).toBeDefined();
    });

    test(`DEVE renderizar o label com o texto ${labelmock}`, () => {
      const label = componente.getByTestId('input-label');
      expect(label.textContent).toBe('textoLabel');
    });

    test('DEVE chamar a função handleOnchange quando o valor de entrada mudar', () => {
      fireEvent.change(componente.getByTestId('input-padrao-box'), {
        target: {value: 'test'},
      });
      expect(handleOnchange).toHaveBeenCalledWith('test');
    });

    test('NÃO DEVE definir o atributo obrigatório se requerido for "false"', () => {
      expect(componente.getByTestId('input-padrao-box')).not.toHaveAttribute(
        'required',
      );
    });

    test('DEVE definir o atributo obrigatório se requerido for "true"', () => {
      componente.rerender(
        <Input
          label={labelmock}
          requered={true}
          handleOnchange={handleOnchange}
        />,
      );
      expect(componente.getByTestId('input-padrao-box')).toHaveAttribute(
        'required',
      );
    });
  });
});
