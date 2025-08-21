import { z } from 'zod';

export const toolValidators = {
    create: z.object({
        toolName: z.string().min(1, 'Tool name is required').max(100),
        toolCategoryId: z.string().cuid('Invalid category ID'),
        toolDescription: z.string().min(10, 'Description must be at least 10 characters'),
        locationId: z.string().cuid('Invalid location ID'),
        link: z.string().url().optional(),
        toolPrice: z.number().positive('Price must be positive'),
        nbLoaning: z.number().int().min(0, 'Number of loanings cannot be negative'),
    }),

    update: z.object({
        toolName: z.string().min(1).max(100).optional(),
        toolCategoryId: z.string().cuid().optional(),
        toolDescription: z.string().min(10).optional(),
        locationId: z.string().cuid().optional(),
        link: z.string().url().optional(),
        toolPrice: z.number().positive().optional(),
        nbLoaning: z.number().int().min(0).optional(),
    }),

    params: z.object({
        id: z.string().cuid('Invalid tool ID'),
    }),

    query: z.object({
        category: z.string().optional(),
        status: z.enum(['AVAILABLE', 'LOANED', 'MAINTENANCE']).optional(),
        page: z
            .string()
            .transform((val) => parseInt(val))
            .pipe(z.number().positive())
            .optional(),
        limit: z
            .string()
            .transform((val) => parseInt(val))
            .pipe(z.number().positive().max(100))
            .optional(),
    }),
};
