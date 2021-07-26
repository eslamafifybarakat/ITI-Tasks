import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingAPIComponent } from './routing-api/routing-api.component';
import { UsersComponent } from './routing-api/users/users.component';
import { UsersDetailsComponent } from './routing-api/users-details/users-details.component';
import { ErrorComponent } from './routing-api/error/error.component';
import { CustomDirective } from './Directives/custom.directive';
import { CustomPipe } from './Pipes/custom.pipe';

const routes:Routes=[
  {path:'', redirectTo:'users',pathMatch:'full'},                        //http://localhost:4200
  {path:'users',component:UsersComponent},                   //http://localhost:4200/users
  {path:'users/:id',component:UsersDetailsComponent},         //http://localhost:4200/users/5                 
  {path:'**',component:ErrorComponent},                     //http://localhost:4200/sadadkwef
]

@NgModule({
  declarations: [
    AppComponent,
    RoutingAPIComponent,
    UsersComponent,
    UsersDetailsComponent,
    ErrorComponent,
    CustomDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



