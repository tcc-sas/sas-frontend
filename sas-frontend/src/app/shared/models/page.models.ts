export interface IPage<T> {
    content: T[];
    empty: boolean;
    first: boolean;
    last:  boolean;
    number: number;
    numberOfElements: number;
    pageable: string | IPageable;
    size: number;
    sort: ISort;
    totalElements: number;
    totalPages: number;
}

export interface IPageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: ISort;
    unpaged: boolean;
}

export interface ISort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
