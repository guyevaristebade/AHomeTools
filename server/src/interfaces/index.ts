export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(data: any): Promise<T>;
    update(id: string, data: any): Promise<T>;
    delete(id: string): Promise<T>;
}

export interface IService<T> {
    findAll(): Promise<any>;
    findById(id: string): Promise<any>;
    create(data: any, file?: Express.Multer.File): Promise<any>;
    update(id: string, data: any, file?: Express.Multer.File): Promise<any>;
    delete(id: string): Promise<any>;
}

export interface IPaginationOptions {
    page: number;
    limit: number;
}

export interface IPaginatedResult<T> {
    data: T[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}
