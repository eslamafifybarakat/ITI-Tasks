import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {
  path = 'assets/Images/'
  current = '1.jpg'

  private timerID: any;

  prev() {
    this.current = Math.max(parseInt(this.current) - 1, 1) + ".jpg";
  }

  start() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.current = Math.max((parseInt(this.current) + 1) % 5,1) + ".jpg", 500);
  }

  stop() {
    clearInterval(this.timerID);
  }

  next() {
    this.current = Math.min(parseInt(this.current) + 1, 4) + ".jpg";
  }

}
