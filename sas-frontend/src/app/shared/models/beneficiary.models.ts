import { Cras, ICras } from './cras.models';

export interface IBeneficiary {
  beneficiaryId: number | null;
  name: string;
  rg: string;
  cpf: string;
  cras: ICras;
  zipCode: string;
  adress: string;
  houseNumber: number | null;
  district: string;
  city: string;
  phoneNumber: string;
  birthDate: number[];
}

export class Beneficiary implements IBeneficiary {
  constructor(
    public beneficiaryId = null,
    public name = '',
    public cpf = '',
    public rg = '',
    public cras = new Cras(),
    public zipCode = '',
    public adress = '',
    public houseNumber = null,
    public district = '',
    public city = '',
    public phoneNumber  = '',
    public birthDate = []
  ) {
  }

  
}
