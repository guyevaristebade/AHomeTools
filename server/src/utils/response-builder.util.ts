import { ApiResponse } from '../types';

export class ResponseBuilder {
    static success<T>(data: T, message: string = 'Success', status: number = 200): ApiResponse {
        return {
            success: true,
            status,
            data,
            message,
            timestamp: new Date().toISOString(),
        };
    }

    static error(message: string, status: number = 500, data: any = null): ApiResponse {
        return {
            success: false,
            status,
            data,
            message,
            timestamp: new Date().toISOString(),
        };
    }

    static created<T>(data: T, message: string = 'Created successfully'): ApiResponse {
        return this.success(data, message, 201);
    }

    static notFound(message: string = 'Resource not found'): ApiResponse {
        return this.error(message, 404);
    }

    static badRequest(message: string = 'Bad request'): ApiResponse {
        return this.error(message, 400);
    }

    static unauthorized(message: string = 'Unauthorized'): ApiResponse {
        return this.error(message, 401);
    }

    static forbidden(message: string = 'Forbidden'): ApiResponse {
        return this.error(message, 403);
    }
}
