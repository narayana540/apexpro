import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }


  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getbyid(id){
    return this.http.get("https://jsonplaceholder.typicode.com/users?id="+id);
  }

}
