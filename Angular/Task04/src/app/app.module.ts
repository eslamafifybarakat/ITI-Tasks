import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { StudentsComponent } from './routing/students/students.component';
import { StudentsDetailsComponent } from './routing/students-details/students-details.component';
import { AboutComponent } from './routing/about/about.component';
import { ErrorComponent } from './routing/error/error.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentsDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
