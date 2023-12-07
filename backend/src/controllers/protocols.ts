import { ApiInfoMsg, ApiResponse } from "../utils/apiMessages";
import { ErrorMsg, ExError } from "../utils/errorMessages";

export interface HttpResponse<T>{
    statusCode: number;
    body: ApiResponse<T>; 
}

export interface HttpRequest<T>{
    param?: any;
    headers?: any;
    body?: T; 
}

export function baseError<T>(message?: string): HttpResponse<T> {
    return { statusCode: 400, body: new ApiResponse(false, message ? message : ErrorMsg.default)};
}