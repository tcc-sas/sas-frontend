import { ICras } from './cras.models';
import { IRoles } from './roles.models';

export class User implements IUser {
  userId: number | null;
  name: string;
  username: string;
  password: string;
  roles: IRoles;
  cras: ICras;

  constructor(
      userId: number | null = null,
      name: string = "",
      username: string = "",
      password: string = "",
      roles: IRoles = {
          id: null,
          name: ""
      },
      cras: ICras = {
          id: null,
          name: ""
      }
    ) {
    this.userId = userId;
    this.name = name;
    this.username = username;
    this.password = password;
    this.roles = roles;
    this.cras = cras;
  }
}

export interface IUser {
  userId: number | null;
  name: string;
  username: string;
  password: string;
  roles: IRoles;
  cras: ICras;
}
