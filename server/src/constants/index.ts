export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
} as const;

export const API_MESSAGES = {
    SUCCESS: 'Operation successful',
    CREATED: 'Resource created successfully',
    UPDATED: 'Resource updated successfully',
    DELETED: 'Resource deleted successfully',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Access forbidden',
    BAD_REQUEST: 'Invalid request data',
    INTERNAL_ERROR: 'Internal server error',
} as const;

export const TOOL_STATUS = {
    AVAILABLE: 'AVAILABLE',
    LOANED: 'LOANED',
    MAINTENANCE: 'MAINTENANCE',
} as const;

export const USER_ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER',
} as const;

export const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
} as const;
