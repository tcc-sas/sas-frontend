export class PaginationOptions{
    pageSizeOptions: Array<number>;
    paginatorLength: number;
    pageSize: number;
    pageIndex: number;
    
    constructor(){
        this.pageSizeOptions = [10, 25, 50];
        this.paginatorLength = 10;
        this.pageSize = 0;
        this.pageIndex = 0;
    }   
}