import { Cras, ICras } from './cras.models';

export interface IBeneficiary {
  id: number | null;
  name: string;
  rg: string;
  cpf: string;
  cras: ICras;
  zipCode: string;
  address: string;
  houseNumber: number | null;
  district: string;
  city: string;
  phoneNumber: string;
  birthDate: number[];
}

export class Beneficiary implements IBeneficiary {
  constructor(
    public id = null,
    public name = '',
    public cpf = '',
    public rg = '',
    public cras = new Cras(),
    public zipCode = '',
    public address = '',
    public houseNumber = null,
    public district = '',
    public city = '',
    public phoneNumber  = '',
    public birthDate = []
  ) {}
}
