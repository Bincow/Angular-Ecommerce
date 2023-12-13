import User from "../../../../backend/src/models/user";
import { ProductDTO } from "../service/_config";

export class Mapper {

  static MapperUserResponse(response: any): User {
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

  static MapperProductListResponse(response: any): ProductDTO[] {
    let productsList: ProductDTO[] = [];

    if (response && response.success) {
      for (const product of response.content) {
        const productDTO: ProductDTO = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          types: product.types,
          image: product.image
        };

        productsList.push(productDTO);
      }
      return productsList;
    } else {
      throw new Error(response.message || 'Erro desconhecido');
    }
  }

  static MapperProductResponse(response: any): ProductDTO {
    let productsList: ProductDTO[] = [];

    if (response && response.success) {
      const product = response.content;

      const productDTO: ProductDTO = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        types: product.types,
        image: product.image
      };

      return productDTO;
    }
    else {
      throw new Error(response.message || 'Erro desconhecido');
    }
  }
}