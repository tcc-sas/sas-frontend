export interface IRoles {
  id: number | null;
  name: string;
}

export class Roles implements IRoles {
  constructor(public id = null, public name = '') {}
}
