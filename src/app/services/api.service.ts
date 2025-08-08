import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/auth-test';

  constructor(private http: HttpClient) {}

  getAuthTest(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
