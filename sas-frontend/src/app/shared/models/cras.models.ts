export interface ICras {
  id: number | null;
  name: string;
}

export class Cras implements ICras {
  constructor(public id = null, public name = '') {}
}
