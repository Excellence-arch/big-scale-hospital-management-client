import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public baseURL: string = environment.baseUrl;

  constructor(public httpClient: HttpClient) { }

  register(newUser: object) {
    return this.httpClient.post(`${this.baseURL}/users/register`, newUser);
  }

  login(id: any) {
    return this.httpClient.post(`${this.baseURL}/users/login`, {id});
  }

  verifyCode(id: any) {
    return this.httpClient.post(`${this.baseURL}/users/verify`, {id});
  }

  fireStaff(details: any) {
    details.role = "patient";
    details.fired = true;
    return this.httpClient.post(`${this.baseURL}/admin/change-role`, details);
  }

  postChat(dets:any) {
    return this.httpClient.post<any>(`${this.baseURL}/users/chat`, dets);
  }

  getAllChats() {
    return this.httpClient.get<any>(`${this.baseURL}/users/get-chats`);
  }
}
