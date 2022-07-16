import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineUserService {

  private baseUrl: string = environment.baseUrl;
  // public token: any = localStorage.getItem("token");

  constructor(public httpClient: HttpClient) { }

  public user = new BehaviorSubject(Object);
  public userDetails = new BehaviorSubject(Object);

  getDashboard(token: any) {
    return this.httpClient.get<any>(`${this.baseUrl}/users/get-dashboard`, {
      headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  }
}
