import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptions3 = {
    headers: new HttpHeaders({

    })
  };

  API_URL = environment.Api_url;
  constructor(private httpClient: HttpClient) { }


  uploadimage(data) {
    return this.httpClient.post(this.API_URL + '/file/uploadimage', data, this.httpOptions3)
  }

  studentAdd(data) {
    return this.httpClient.post(this.API_URL + '/student/add', data, this.httpOptions3)
  }
}

