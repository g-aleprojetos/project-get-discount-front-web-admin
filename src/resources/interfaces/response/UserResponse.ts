import {IUser} from '../User';

export interface IUserResponse {
  users?: IUser[];
  error?: boolean;
  message?: string;
}

export interface IUserResponseGet {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  role: string;
}
