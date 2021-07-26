import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { AddnewuserComponent } from './Components/addnewuser/addnewuser.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { UserItemsComponent } from './Components/user-items/user-items.component';
import { ErrorComponent } from './Components/error/error.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddnewuserComponent,
    UserdetailsComponent,
    UserItemsComponent,
    ErrorComponent,
    FooterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
