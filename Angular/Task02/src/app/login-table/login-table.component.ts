import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-table',
  templateUrl: './login-table.component.html',
  styleUrls: ['./login-table.component.css']
})
export class LoginTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = ""
  age: number = 0
  students: { name: string, age: number }[] = []

  AddNewStudent() {
    let student: { name: string, age: number } = { name: this.name, age: this.age };
    if (this.AgeValid && this.NameValid) {
      this.students.push(student);
    }
  }

  get NameValid() {
    return this.name != "" && this.name.length >= 3;
  }

  get AgeValid() {
    return this.age >= 18 && this.age <= 50;
  }
}
