import {api} from 'infrastructure/api';
import {ILoginResponse} from 'infrastructure/api/schemas/response';
import {ILoginRequest} from 'infrastructure/api/schemas/request';
import rotasAPI from 'types/rotasAPI';

export async function login(login: ILoginRequest) {
  const {data} = await api.post<ILoginResponse>(`${rotasAPI.login}`, {login});
  return data;
}
