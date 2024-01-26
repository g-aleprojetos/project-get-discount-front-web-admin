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

    test('DEVE renderizar o input do tipo "text"', () => {
      const input = componente.getByTestId(
        'input-padrao-box',
      ) as HTMLInputElement;
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect(input.type).toBe('text');
    });

    test('DEVE renderizar o input do tipo "email"', () => {
      componente.rerender(
        <Input
          tipo="email"
          label={labelmock}
          handleOnchange={handleOnchange}
        />,
      );
      const input = componente.getByTestId(
        'input-padrao-box',
      ) as HTMLInputElement;
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect(input.type).toBe('email');
    });

    test(`DEVE renderizar o label com o texto ${labelmock}`, () => {
      const label = componente.getByTestId('input-label');
      expect(label.textContent).toBe('textoLabel');
    });

    test('DEVE chamar a função handleOnchange quando o valor de entrada mudar', () => {
      const eventoEsperado = {
        target: {value: 'test'},
      };

      fireEvent.change(
        componente.getByTestId('input-padrao-box'),
        eventoEsperado,
      );

      expect(handleOnchange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({value: 'test'}),
        }),
      );
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

    describe('QUANDO o input for do tipo "password"', () => {
      beforeEach(() => {
        componente.rerender(
          <Input
            label={labelmock}
            tipo="password"
            handleOnchange={handleOnchange}
          />,
        );
      });
      test('DEVE renderizar o input do tipo "password"', () => {
        const input = componente.getByTestId(
          'input-padrao-box',
        ) as HTMLInputElement;
        expect(input.type).toBe('password');
      });

      test('DEVE renderizar o icone de "olho fechado"', () => {
        const icone = componente.getByTestId('icone-olho-fechado');
        expect(icone).toBeDefined();
      });

      test('DEVE renderizar o icone de "olho aberto" QUANDO clicar no icone de "olho fechado"', () => {
        const icone = componente.getByTestId('icone-olho-fechado');
        fireEvent.click(icone);
        const iconeAberto = componente.getByTestId('icone-olho-aberto');
        expect(iconeAberto).toBeDefined();
      });
    });
  });
});
