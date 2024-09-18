import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-smart-query',
  templateUrl: './smart-query.component.html',
  styleUrls: ['./smart-query.component.css']
})
export class SmartQueryComponent implements OnInit {
  query: any;
  Answer: any[] = [];
  userHistory: any[] = [];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getUserHistory()
  }

  getUserHistory() {

    const userId = 1
    this.chatService.getUserHistory(userId).subscribe({
      next: (res: any) => {

        this.userHistory=res.slice(0,5)
        console.log(this.userHistory);
        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  onSend() {
    const Question = {
      'U_ID': 1,
      'Question': this.query
    };

    this.query = '';

    this.chatService.postQuery(Question).subscribe({
      next: (res: any) => {

        const chatEntry = {
          question: Question.Question,
          response: res.response
        };

        this.Answer.push(chatEntry);
      },
      error: (err) => {
        console.error('Error occurred while fetching data:', err);
      }
    });
  }
}
