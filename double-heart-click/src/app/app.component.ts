import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clicked: boolean = false;
  times: number = 0;
  @ViewChild('heart', { static: true }) heart!: ElementRef;

  onClick() {
    this.clicked = true;

    this.times++;

    // const x = e.clientX;
    // const y = e.clientY;

    // // console.dir(e)
    // const leftOffset = e.offsetX;
    // const topOffset = e.offsetY;

    // const xInside = x - leftOffset;
    // const yInside = y - topOffset;

    // heart.style.left = `${xInside}px`
    // heart.style.top = `${yInside}px`
    // setTimeout(() => {
    //   console.log(this.heart);
    //   this.clicked = false;
    // }, 2000);
  }
}
