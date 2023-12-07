export interface ExError{
    sucess:false 
    message:string
}

interface IErroMessages {
    [key: string]: string;
}

export const ErrorMsg:IErroMessages = {
    EX001: 'EX001 - O Body é nulo.',
    EX002: 'EX002 - Necessario preencher o campo: {0}',
    EX003: 'EX003 - O Preço tem que ser maior que zero',
    EX004: 'EX004 - Email invalido.',
    default: 'Tente novamente mais tarde',
};

export function concatErrorMsg(key: string, ...variables: (string | number)[]): string | undefined {
    const message = ErrorMsg[key];
    if (message) {
        let formattedMessage = message;
        variables.forEach((value, index) => {
            formattedMessage = formattedMessage.replace(`{${index}}`, value.toString());
        });
        return formattedMessage;
    }
    return undefined;
}
