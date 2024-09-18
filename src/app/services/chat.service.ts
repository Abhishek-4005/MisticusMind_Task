import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = environment.apiUrl; 

  constructor(private http:HttpClient) { }

  postQuery(query:any){
   return this.http.post(`${this.apiUrl}q_Q&A/`,query)
  }

  getUserHistory(userId:any){
    return this.http.get(`${this.apiUrl}user_history/${userId}`)
  }

}
