import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ourValidationForm = new FormGroup({
    name: new FormControl("KOKO", [Validators.required,Validators.minLength(3)]),
    age: new FormControl(20, [Validators.min(18), Validators.max(50)])
  });

  get nameValid() {
    return this.ourValidationForm.controls.name.valid;
  }

  get ageValid() {
    return this.ourValidationForm.controls.age.valid;
  }
  @Output() studentEvent = new EventEmitter();
  AddNewStudent(data:any) {
    if (this.nameValid && this.ageValid) {
      let student: { name: string, age: number } = { name: this.ourValidationForm.controls.name.value, age: this.ourValidationForm.controls.age.value };
      this.studentEvent.emit(student);
    }
    console.log(this.ourValidationForm)
  }

}
