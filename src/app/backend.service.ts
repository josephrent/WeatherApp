import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  path = environment.url

  getStationData(id: string): any {
    return this.http.get(this.path+'/weather/'+id)
  }
}
