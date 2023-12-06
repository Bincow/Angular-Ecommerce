export interface HttpResponse<T>{
    statusCode: number;
    body: T | string; 
}

export interface HttpRequest<T>{
    param?: any;
    headers?: any;
    body?: T; 
}