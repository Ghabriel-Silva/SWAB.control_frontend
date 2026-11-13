export interface Meta {
    limit: number,
    page: number,
    total: number,
    totalPages: number
}


export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    meta: Meta;
}
