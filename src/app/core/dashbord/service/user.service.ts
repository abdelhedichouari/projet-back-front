import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
api_url='http://localhost3000/api/v1/user'
  constructor(private _http :HttpClient) { }
 //get user from backend
 getuser():Observable <User[]>{

  return this._http.get<User[]>('http://localhost:3000/api/v1/user')
 }

 deleteuser(id:string):Observable <string>{

  return this._http.delete<string>('http://localhost:3000/api/v1/user/'+id)
 }

 posteuser(user:User):Observable <string>{

  return this._http.post<string>('http://localhost:3000/api/v1/user',user)
 }
 updatuser(data:any, id:string):Observable <string>{

  return this._http.patch<string>('http://localhost:3000/api/v1/user/'+id,data)
 }

}

