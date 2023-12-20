export interface Profile {
    id: string,
    name: string,
    email: string,
    address: string,
    phoneNumber:string,
    picture: string,
    taxNumber: string,
    type:ProfileType
}

export interface GetProfileById {
    id:string
}

export enum ProfileType {
    CPF = 0,
    CNPJ = 1
}

