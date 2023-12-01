import Product from "../models/product";
import User from "../models/user";

import { MongoClient, MongoClientOptions } from 'mongodb';

const url = 'mongodb+srv://usuario:senha@cluster.mongodb.net/seu-banco-de-dados';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true } as MongoClientOptions);

async function connect() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB Atlas');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB Atlas:', err);
  }
}

connect();


export default class Database {
  
    static async getLogin(email: string, password: string): Promise<User | null> {
        
        return null;
    }
    
    static async getAllProducts():Promise<Product[] | null> {
        
        return null;
    }
    
}



