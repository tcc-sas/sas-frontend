export interface IConstants {
    name: string;
    infoText: string;
    route: string;
    fields: Array<IFields>;
}

export interface IFields {
    id: number;
    name: string;
    apiObjectField: string;
    genericType: string;
    filterType?: string;
    isTableField: boolean
    isFilterField: boolean;
    isObject: boolean;
    idObject: string;
    fieldObject: string;
}