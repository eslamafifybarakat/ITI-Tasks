import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.css']
})
export class AddnewuserComponent implements OnInit,OnDestroy {


  constructor(private MyService:DemoService,private router:Router) { }
  ngOnDestroy(): void {
    // this.Des.unsubscribe();
  }


  ngOnInit(): void {
  }
  AddUser(name:any, email:any, phone:any){
    let user={name:name, email:email, phone:phone};
    this.MyService.AddNewUser(user).subscribe();
    setTimeout(() =>{this.router.navigateByUrl("/users");},500);

  }


}
