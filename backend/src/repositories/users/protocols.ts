import { Profile } from "../../models/profile";
import User from "../../models/user";

export const MongoCollection = 'users';
export type MongoUser = Omit<User, "id">;


export const MongoCollectionSec = 'profiles';
export type MongoProfile = Omit<Profile, "id">;