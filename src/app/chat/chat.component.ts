import { Component, OnInit } from '@angular/core';
import socketClient from "socket.io-client";
import { environment } from 'src/environments/environment';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: string = "";
  public socket:any;
  public chats:any = []
  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.socket = socketClient(environment.baseUrl);
    this.requestService.getAllChats().subscribe((res:any) => {
      if (res.status) {
        this.chats = res.resp;
      } else {
        console.log(res);
      }
    })
    this.socket.on('receive-message', (newMessage: any) => {
      this.chats = [...this.chats, newMessage];
    });
    // console.log(this.chats);
  }

  postMessage() {
    let details:any = {}
    details.message = this.message;
    details.from_id = 112
    console.log(details);
    this.requestService.postChat(details).subscribe((res:any) => {
      if (res.status) {
        this.saveMessage(res.chats);
      } else {
        console.log(res);
      }
    })
  }

  saveMessage(msg:any){
    this.socket.emit("new-chat", msg);
    // this.socket.on('receive-message', (newMessage: any) => {
    //   this.chats = [...this.chats, newMessage];
    // });
    this.message = "";
  }

}
