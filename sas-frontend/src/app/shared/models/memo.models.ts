import { IStockProduct } from "./stock.models";

export interface IMemo {
    id: number | null;
    requestDate: number[];
    statusMemo: string;
    statusDelivery: string;
    orderedProducts: string;
    deliveredProducts: string;

    orderedProductsArray?: MemoRegistrationProduct[];
    deliveredProductsArray?: MemoRegistrationProduct[];
}

export interface IMemoRegistrationOption {
    products: IStockProduct[];
    statusDelivery: string[];
    statusMemo: string[];
}

export interface IMemoRegistrationProduct {
    name: string;
    quantity: number | null;
}



export class MemoRegistrationProduct {
    constructor(
        public name = '',
        public quantity = 0
    ) {}
}

export const FIRST_STATUS_DELIVERY = "PENDENTE";
export const FIRST_MEMO_STATUS = "EM_ANALISE";