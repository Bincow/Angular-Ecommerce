import User from "../../models/user";

export const MongoCollection = 'users';
export type MongoUser = Omit<User, "id">;