import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {LoginPage} from './LoginPage';
import userEvent from '@testing-library/user-event';

describe('LoginPage', () => {
  let componente: RenderResult;
  // const handleSubmitMock = jest.fn();
  // const handleEsqueceuSenhaMock = jest.fn();

  beforeEach(() => {
    componente = render(<LoginPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "LoginPage"`, () => {
      const home = componente.getByTestId('loginPage');
      expect(home).toBeDefined();
    });

    test(`DEVE renderizar o titulo da pagina`, () => {
      const titulo = componente.getByText('Login');
      expect(titulo).toBeDefined();
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
    test('DEVE preencher o valor do email', () => {
      const login = componente.getByLabelText('Seu email');
      userEvent.type(login, 'teste@email.com');
      expect((login as HTMLInputElement).value).toBe('teste@email.com');
    });

    test('DEVE preencher o valor da senha', () => {
      const senha = componente.getByLabelText('Sua senha');
      userEvent.type(senha, 'Senha123');
      expect((senha as HTMLInputElement).value).toBe('Senha123');
    });

    // test('DEVE chamar o método handleSubmit ao enviar o formulário', () => {
    //   const login = componente.getByLabelText('Seu email');
    //   userEvent.type(login, 'teste@email.com');
    //   const senha = componente.getByLabelText('Sua senha');
    //   userEvent.type(senha, 'Senha123');

    //   const botaoLogin = componente.getByTestId('bnt-login');
    //   fireEvent.click(botaoLogin);

    //   expect(handleSubmitMock).toHaveBeenCalledTimes(1);

    //   expect(handleSubmitMock).toHaveBeenCalledWith({
    //     email: 'teste@email.com',
    //     senha: 'Senha123',
    //   });
    // });

    // test('DEVE chamar o método handleEsqueceuSenha ao clicar no botão de recuperar senha', () => {
    //   const botaoRecuperarSenha = componente.getByTestId(
    //     'botao-recuperar-senha',
    //   );
    //   fireEvent.click(botaoRecuperarSenha);

    //   expect(handleEsqueceuSenhaMock).toHaveBeenCalledTimes(1);
    // });
  });
});
