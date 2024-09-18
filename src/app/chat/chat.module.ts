import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { HomeComponent } from './home/home.component';
import { SmartQueryComponent } from './smart-query/smart-query.component';


@NgModule({
  declarations: [
    HomeComponent,
    SmartQueryComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
