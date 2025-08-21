import { PrismaClient } from '@prisma/client';

export abstract class BaseRepository<T> {
    protected prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    abstract findAll(): Promise<T[]>;
    abstract findById(id: string): Promise<T | null>;
    abstract create(data: any): Promise<T>;
    abstract update(id: string, data: any): Promise<T>;
    abstract delete(id: string): Promise<T>;
}
