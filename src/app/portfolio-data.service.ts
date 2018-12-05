import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getHTTPData() {
    // test REST data
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get('http://localhost:5000/users');
  }

  constructor(private http: HttpClient) { }
}

