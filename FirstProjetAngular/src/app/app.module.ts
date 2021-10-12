import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { UserComponent } from './composants/user/user.component';
import  {HttpClientModule,HttpClient} from "@angular/common/http";
import { UserService } from './services/user.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
