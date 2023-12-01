// user.ts
enum UserType {
    Admin = 0,
    Client = 1,
}
  
class User {
    constructor(
        public id: number,
        public login: string,
        public password: string,
        public type: UserType
    ) {}
}

export default User;