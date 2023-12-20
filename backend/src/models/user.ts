// user.ts
export enum UserType {
    Admin = 0,
    User = 1,
}


//#region GetUserByLogin
export interface GetUserByLoginParams {
    login:string,
    password: string
}
//#endregion

export interface User {
    id: string,
    login: string,
    password: string,
    type: UserType,
    profileId: string,
}

export default User;