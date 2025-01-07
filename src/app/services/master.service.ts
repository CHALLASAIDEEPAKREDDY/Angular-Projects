import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponceModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getDesignations(): Observable<APIResponceModel> {
    return this.http.get<APIResponceModel>(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation"
    );
  }
}
