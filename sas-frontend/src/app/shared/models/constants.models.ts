export interface IConstants {
    name: string;
    infoText: string;
    route: string;
    fields: Array<IFields>;
    tableOptions: any;

}

export interface IFields {
    id: number;
    name: string;

    apiField: string;
    
    isTableField: boolean
    tableType?: string;
    
    isFilterField: boolean;
    filterType?: string;
    
    isObject: boolean;
    objectId: string;
    objectName: string;

    mask?: string;

}