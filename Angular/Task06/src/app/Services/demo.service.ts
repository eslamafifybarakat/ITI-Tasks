import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  // MyClient: any;

  constructor(private MyClient:HttpClient) { }

  baseUrl = "https://jsonplaceholder.typicode.com/users";


  GetAllUsers(){
    return this.MyClient.get(this.baseUrl);
  }

  GetUserById(id:number){
    // return this.MyClient.get(this.baseUrl+"/"+id);
    return this.MyClient.get(`${this.baseUrl}/${id}`);
  }

  AddNewUser(user:any){
    return this.MyClient.post(this.baseUrl, user);
  }

  DeleteUserById(id:number){
    return this.MyClient.delete(`${this.baseUrl}/${id}`);
  }

  UpdateUserById(id:number, user:any){
    return this.MyClient.put(`${this.baseUrl}/${id}`, user);
  }

}
