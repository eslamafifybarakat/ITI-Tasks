import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

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
