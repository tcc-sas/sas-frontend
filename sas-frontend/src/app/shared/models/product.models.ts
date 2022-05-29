export interface IProduct {
  id: number | null;
  productId: string;
  name: string;
  unity: string;
  description: string;
}

export class Product implements IProduct {
  constructor(
    public id: number | null = null,
    public productId: string = '',
    public name: string = '',
    public unity: string = '',
    public description: string = '',
  ) {}
}
