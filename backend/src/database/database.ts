import Product from "../models/product";
import User from "../models/user";
import { MongoClient, MongoClientOptions } from 'mongodb';



export default class Database {
  
    static async getLogin(email: string, password: string): Promise<User | null> {
        
        return null;
    }
    
    static async getAllProducts():Promise<Product[] | null> {
        
        return null;
    }
    
}



