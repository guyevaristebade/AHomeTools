export interface CreateToolDto {
    toolName: string;
    toolCategoryId: string;
    toolDescription: string;
    locationId: string;
    link?: string;
    toolPrice: number;
    nbLoaning: number;
}

export interface UpdateToolDto {
    toolName?: string;
    toolCategoryId?: string;
    toolDescription?: string;
    locationId?: string;
    link?: string;
    toolPrice?: number;
    nbLoaning?: number;
}

export interface ToolResponseDto {
    id: string;
    toolName: string;
    toolDescription: string;
    toolImageUrl: string;
    toolStatus: string;
    toolPrice: number;
    nbLoaning: number;
    createdAt: Date;
    category: {
        id: string;
        categoryName: string;
    };
    location: {
        id: string;
        locationName: string;
    };
}
