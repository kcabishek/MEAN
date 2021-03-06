import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MessageComponent} from "../messages/message.component";
import {MessageListComponent} from "../messages/message-list.component";
import {MessageInputComponent} from "../messages/message-input.component";
import {MessagesComponent} from "../messages/messages.component";
import {AuthenticationComponent} from "../auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {SignupComponent} from "../auth/signup.component";
import {SigninComponent} from "../auth/signin.component";
import {LogoutComponent} from "../auth/logout.component";


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthenticationComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
