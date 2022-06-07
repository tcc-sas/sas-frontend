import { Cras, ICras } from "./cras.models";
import { IProduct, Product } from "./product.models";

export interface IStock {
    id: number | null;
    product: IProduct;
    quantity: number;
    cras: ICras;
}

export class Stock implements IStock {
    constructor(
        public id = null,
        public product = new Product(),
        public quantity = 0,
        public cras = new Cras(),
    ){}
}