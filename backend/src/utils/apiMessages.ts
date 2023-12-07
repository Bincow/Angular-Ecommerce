export class ApiResponse<T>{
    success:boolean ;
    message:string;
    content?:T

    constructor(success: boolean, message: string, content?: T) {
        this.success = success;
        this.message = message;
        this.content = content;
    }
}

interface IApiMessages {
    [key: string]: string;
}

export const ApiErrorMsg:IApiMessages = {
    EX001: 'Infome um metodo existente', 
};

export const ApiInfoMsg:IApiMessages = {
    default: 'Metodo executado com sucesso', 
};