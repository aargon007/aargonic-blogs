export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export interface ApiError {
    message: string;
    statusCode: number;
    details?: any;
}

export interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}

export interface SearchParams {
    query?: string;
    category?: string;
    tag?: string;
    author?: string;
    status?: string;
}

export interface SortParams {
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}
