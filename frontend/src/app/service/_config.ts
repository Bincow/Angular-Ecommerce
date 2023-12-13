const ApiUrl = 'http://localhost:8000/'

export const getApiUrl = (section: string) => {
    return ApiUrl+'api/'+section;
}

export interface ProductDTO{
    id?: string,
    ids?: string[],
    name?: string,
    price?: number,
    quantity?: number,
    types?: number[] | null,
    image?: string  | null
}