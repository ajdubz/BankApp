import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
    
  }

  //
  getAll():Observable<any> {
    let url = "https://localhost:7124/Customers";
    return this.http.get(url);
  }

  Create(): Observable<any> {
    let url = "https://localhost:7124/Customers";
    return this.http.post(url, {});

  }
}
