import { Tool } from '@prisma/client';
import { BaseRepository } from './base.repository';
import { prisma } from '../config';

export class ToolRepository extends BaseRepository<Tool> {
    constructor() {
        super(prisma);
    }

    async findAll(): Promise<Tool[]> {
        return this.prisma.tool.findMany({
            include: {
                category: true,
                location: true,
            },
        });
    }

    async findById(id: string): Promise<Tool | null> {
        return this.prisma.tool.findUnique({
            where: { id },
            include: {
                category: true,
                location: true,
            },
        });
    }

    async create(data: any): Promise<Tool> {
        return this.prisma.tool.create({
            data,
            include: {
                category: true,
                location: true,
            },
        });
    }

    async update(id: string, data: any): Promise<Tool> {
        return this.prisma.tool.update({
            where: { id },
            data,
            include: {
                category: true,
                location: true,
            },
        });
    }

    async delete(id: string): Promise<Tool> {
        return this.prisma.tool.delete({
            where: { id },
        });
    }

    async findByCategory(categoryId: string): Promise<Tool[]> {
        return this.prisma.tool.findMany({
            where: { toolCategoryId: categoryId },
            include: {
                category: true,
                location: true,
            },
        });
    }

    async findByStatus(status: string): Promise<Tool[]> {
        return this.prisma.tool.findMany({
            where: { toolStatus: status as any },
            include: {
                category: true,
                location: true,
            },
        });
    }
}
