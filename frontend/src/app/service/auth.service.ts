import { getApiUrl } from './_config';

import { Injectable } from '@angular/core';
import { userBase } from '../../main';
import { HttpClient } from '@angular/common/http';

const sectionUri = 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http:HttpClient) { 

  }

  RegisterUser(inputdata:any){
    return this.http.post(getApiUrl(sectionUri),inputdata)
  }
  getUserByLogin(email:string,password:string){
    return this.http.post(getApiUrl(sectionUri),{
      method: "GetUserByLogin",
      login:email,
      password:password
    });
  }
  Getall(){
    return this.http.get(getApiUrl(sectionUri));
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(getApiUrl(sectionUri)+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('login')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
