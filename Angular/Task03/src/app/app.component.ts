import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThirdDay';
   students: { name: string, age: number }[] = []
  ReciveData(data:any){
    this.students.push(data)
  }
}
