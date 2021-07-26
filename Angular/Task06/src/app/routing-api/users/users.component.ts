import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(private MyService:DemoService) { }
  users:any;
  ngOnInit(): void {
    this.MyService.GetAllUsers().subscribe(
      (res)=>{this.users = res;},
      (err)=>{console.log(err);}
      );
  }

}
