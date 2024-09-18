import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SmartQueryComponent } from './smart-query/smart-query.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:SmartQueryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
