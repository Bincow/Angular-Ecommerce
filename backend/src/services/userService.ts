import Database from "../database/database";


class UserService {
    static async getLogin() {
        try 
        {
            const products = await Database.getLogin("","");
            return products; 
        } 
        catch (error) 
        {
            console.error('Erro ao obter produtos do banco de dados:', error);
            throw error; 
        }
    }
}

export default UserService;
