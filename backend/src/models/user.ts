// user.ts
enum UserType {
    Admin = 0,
    Client = 1,
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
    type: UserType
}

export default User;