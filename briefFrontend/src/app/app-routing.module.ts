import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  {
      path: '', redirectTo: '/Accueil', pathMatch: 'full',
  },
  {
      path: 'Accueil',
      component: UsersComponent,
  },
  {
    path: 'UserDetails',
    component: UserDetailsComponent
},
  { path: '**', component: UsersComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
