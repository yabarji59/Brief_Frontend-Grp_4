import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{UserComponent} from './user/user.component';
import {UserdetailsComponent} from './userdetails/userdetails.component'

const routes: Routes = [{
  path: '',
  component: UserComponent
},
{
  path: 'userdetails',
  component: UserdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[UserComponent,UserdetailsComponent]

 
