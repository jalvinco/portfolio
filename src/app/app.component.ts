import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('myyvideo') myVideo: any;
  constructor() { }

  ngOnInit(): void {
    // let video = this.myVideo.nativeElement;
    // video.play();
  }
}
