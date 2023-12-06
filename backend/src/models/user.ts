// user.ts
enum UserType {
    Admin = 0,
    Client = 1,
}
  
export interface User {
    id: string,
    login: string,
    password: string,
    type: UserType
}

export default User;