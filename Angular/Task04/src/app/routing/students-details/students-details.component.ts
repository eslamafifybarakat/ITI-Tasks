import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  id: any;

  constructor(MyActivated: ActivatedRoute) {
    // console.log(MyActivated.snapshot.params.id);
    this.id = MyActivated.snapshot.params.id;
  }


  ngOnInit(): void {
  }

}
