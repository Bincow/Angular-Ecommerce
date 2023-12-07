import { ApiResponse } from "../utils/apiMessages";
import { ExError } from "../utils/errorMessages";

export interface HttpResponse<T>{
    statusCode: number;
    body: ApiResponse<T>; 
}

export interface HttpRequest<T>{
    param?: any;
    headers?: any;
    body?: T; 
}