import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    let url = "https://localhost:7124/Accounts";
    return this.http.get(url);
  }
}
