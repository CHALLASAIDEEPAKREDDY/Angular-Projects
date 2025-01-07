import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { APIResponceModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getAllClients():Observable<APIResponceModel>{
    return this.http.get<APIResponceModel>(environment.API_URL+"GetAllClients")
  }
  addUpdate(obj:client):Observable<APIResponceModel>{
    return this.http.post<APIResponceModel>(environment.API_URL+"addUpdateClient",obj)
  }
  deleteClientById(id:number):Observable<APIResponceModel>{
    return this.http.delete<APIResponceModel>(environment.API_URL+"deleteClientById?clientId="+id)
  }
}
