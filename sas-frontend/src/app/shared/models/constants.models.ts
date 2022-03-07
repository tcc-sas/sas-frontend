export interface IConstants {
    name: string;
    infoText: string;
    route: string;
    fields: Array<IFields>;
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
}