import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private MyRef:ElementRef) {
    if(MyRef.nativeElement.localName==="th"){
          MyRef.nativeElement.style.backgroundColor = 'red';
    MyRef.nativeElement.style.color = 'black';
    MyRef.nativeElement.style.fontSize = 'larger';
    MyRef.nativeElement.style.fontFamily = 'Comic Sans MS';
    }

  }
    elementSelected=0;
    @HostListener('click')
    private onClick() {
      // this.elementSelected = !this.elementSelected;
      if(this.elementSelected===0){
        this.MyRef.nativeElement.style.backgroundColor='yellow';
        this.elementSelected=1;
      }else {
        if(this.MyRef.nativeElement.localName==="th"){
           this.MyRef.nativeElement.style.backgroundColor = 'red';
          this.elementSelected=0;
        }else {
           this.MyRef.nativeElement.style.backgroundColor = 'white';
          this.elementSelected=0;
        }
      }
      // if(this.MyRef.nativeElement.localName==="th"){
      //   if (this.elementSelected===0) {

      //     this.MyRef.nativeElement.style.backgroundColor='yellow';
      //     this.elementSelected=1;
      //   } else {
      //     this.MyRef.nativeElement.style.backgroundColor = 'red';
      //     this.elementSelected=0;
      //   }
      // }else{
      //   if (this.elementSelected===0) {

      //     this.MyRef.nativeElement.style.backgroundColor='yellow';
      //     this.elementSelected=1;
      //   } else {
      //     this.MyRef.nativeElement.style.backgroundColor = 'white';
      //     this.elementSelected=0;
      //   }
      // }

      // this.MyRef.nativeElement.style.backgroundColor = 'yellow';
      // this.MyRef.nativeElement.style.color = 'white';
      // this.MyRef.nativeElement.style.fontSize = 'larger';
      // this.MyRef.nativeElement.style.fontFamily = 'Comic Sans MS';
      }
    }
