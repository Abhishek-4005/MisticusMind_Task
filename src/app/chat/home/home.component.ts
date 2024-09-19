import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public thumbsDownData: any[] = []

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getThumbsDownData()
  }

  getThumbsDownData() {
    this.chatService.getthumbsDownHistory().subscribe((data:any) => {
      this.thumbsDownData = data
    })
  }

}
