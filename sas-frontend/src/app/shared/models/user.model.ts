import { Cras, ICras } from './cras.models';
import { IRoles, Roles } from './roles.models';

export interface IUser {
  userId: number | null;
  name: string;
  username: string;
  password: string;
  roles: IRoles;
  cras: ICras;
}

export class User implements IUser {
  constructor(
    public userId: number | null = null,
    public name: string = '',
    public username: string = '',
    public password: string = '',
    public roles = new Roles(),
    public cras = new Cras()
  ) {}
}
