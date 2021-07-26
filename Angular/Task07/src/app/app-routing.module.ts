import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewuserComponent } from './Components/addnewuser/addnewuser.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { UsersComponent } from './Components/users/users.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'newuser',component:AddnewuserComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
