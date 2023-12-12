import User from "../../../../backend/src/models/user";

export class Mapper{

    static MapperUserResponse(response: any): User
    {
        if (response && response.success) {
          return {
            id: response.content.id,
            login: response.content.login,
            password: response.content.password,
            type: response.content.type
          };
        } else {
          throw new Error(response.message || 'Erro desconhecido');
        }
    }

}