import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  constructor(MyActivated:ActivatedRoute,private MyService:DemoService) {
    this.id = MyActivated.snapshot.params.id;
  }

   id:number=0;
   user:any;

  ngOnInit(): void {
    this.MyService.GetUserById(this.id).subscribe(
      (res)=>{this.user = res},
      (err)=>{console.log(err)}
    );
  }

}
