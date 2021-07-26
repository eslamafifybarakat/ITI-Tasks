import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  constructor(private MyService:DemoService,private router:Router) { }

  users:any;
  Dusers:any;
  ngOnDestroy(): void {
    this.Dusers.unsubscribe();
  }
  ngOnInit(): void {
    this.Dusers =this.MyService.GetAllUsers().subscribe(
      (res)=>{this.users = res;},
      (err)=>{console.log(err);}
    );
  }

  deleteUser(id:number){
    console.log(id);
    this.MyService.DeleteUserById(id).subscribe();
    this.MyService.GetAllUsers().subscribe(
      (res)=>{this.users = res;},
      (err)=>{console.log(err);}
    );
    this.router.navigateByUrl("/users");
  }

}
