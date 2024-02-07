import {useCallback, useState} from 'react';
import {login} from 'services/login';
import {IError, ILogin} from 'types/interfaces';
import {ILoginResponse} from 'infrastructure/api/schemas/response';

export function useLogin() {
  const [data, setData] = useState<ILoginResponse | undefined>(undefined);
  const [error, setError] = useState<IError | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const obter = useCallback(async (loginState: ILogin) => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await login(loginState);
      setData(response);
    } catch (err) {
      setError({
        codigo: 'ERRO',
        mensagem: `${err}`,
      });
    } finally {
      setLoading(false);
    }
  }, []);
  return {data, obter, error, loading};
}
