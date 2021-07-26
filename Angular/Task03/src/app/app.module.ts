import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { RegisterComponent } from './component-interaction/register/register.component';
import { StudentsComponent } from './component-interaction/students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    RegisterComponent,
    StudentsComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
