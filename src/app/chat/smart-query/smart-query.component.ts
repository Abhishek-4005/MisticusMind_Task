import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-smart-query',
  templateUrl: './smart-query.component.html',
  styleUrls: ['./smart-query.component.css']
})
export class SmartQueryComponent implements OnInit {
  public query: any;
  public Answer: any[] = [];
  public userHistory: any[] = [];
  public suggestionForm!: FormGroup;
  public SAnswer: any;
  public historyForm!: FormGroup;
  public chatHistory: any[] = [];
  constructor(private chatService: ChatService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getUserHistory()
    this.createSuggestionForm()
  
  }

  getUserHistory() {

    const userId = 1
    this.chatService.getUserHistory(userId).subscribe({
      next: (res: any) => {

        this.userHistory = res.slice(0, 5)
        console.log(this.userHistory);

      }, error: (err: any) => {
        // console.log(err);

      }
    })
  }
  createSuggestionForm() {
    this.suggestionForm = this.fb.group({
      Question: [''],
      Suggested_ans: ['']
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
        // console.error('Error occurred while fetching data:', err);
      }
    });
  }
  onThumbsDown(data: any) {
    this.SAnswer = data.response
    this.suggestionForm.patchValue({ Question: data.question })
  }
  sendSuggestion() {
    const Suggestion = {
      ...this.suggestionForm.value,
        Answer:this.SAnswer
    }
    this.chatService.thumbsDown(Suggestion).subscribe({
      next: (res: any) => {
        this.suggestionForm.reset()
      }
    })
  }

  showHistory(data:any){
    this.chatHistory.push(data)

  }
}
