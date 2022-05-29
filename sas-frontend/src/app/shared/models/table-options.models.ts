import { IFields } from "./constants.models";

export const ASC: string = 'asc';
export const DESC: string = 'desc';

export class TableOptions {
    tableFields: Array<IFields>;
    tableSpacing: string;
    tableFieldToSort: string;
    tableSortDirection: string;
   
    constructor() {
        this.tableFields = [];
        this.tableSpacing = '';
        this.tableFieldToSort = '';
        this.tableSortDirection = ASC;
    }
}

