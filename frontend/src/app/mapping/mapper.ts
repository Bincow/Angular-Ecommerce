interface UserProfile{
  user: {
    id: string,
    login: string,
    password: string,
    type: number,
  },
  profile: {
    id: string,
    name: string,
    email: string,
    address: string,
    phoneNumber:string,
    picture: string,
    taxNumber: string,
    type:number
  }
}


import { ProductDTO } from "../service/_config";

export class Mapper {

  static MapperUserResponse(response: any): UserProfile {
    if (response && response.success) {
      return {
        user: {
          id: response.content.user.id,
          login: response.content.user.login,
          password: response.content.user.password,
          type: response.content.user.type,
        },
        profile: {
          id: response.content.profile.id,
          name: response.content.profile.name,
          email: response.content.profile.email,
          address: response.content.profile.address,
          phoneNumber:response.content.profile.phonenumber,
          picture: response.content.profile.picture,
          taxNumber: response.content.profile.taxnumber,
          type:response.content.profile.type
        }
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