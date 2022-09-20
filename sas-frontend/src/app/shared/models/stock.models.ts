import { Cras, ICras } from "./cras.models";

export interface IStockProduct {
    id: number | null;
    name: string;
    quantity: number;
}

export class StockProduct implements IStockProduct{
    constructor(
        public id = null,
        public name = '',
        public quantity = 0,
    ){}
}

export interface IStockProductRegistration {
    id: number | null;
    product: IStockProduct;
    productQuantity: number;
    cras: ICras;
}

export class StockProductRegistration implements IStockProductRegistration {
    constructor(
        public id = null,
        public product = new StockProduct(),
        public productQuantity = 0,
        public cras = new Cras(),
    ){}
}

export interface StockRegistrationOptions {
    cras: ICras[],
    products: IStockProduct[]
}








