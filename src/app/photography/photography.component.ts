import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  @ViewChild('myId')
  myId!: ElementRef;
  ngOnInit(): void {
// playVideos();
  }

  ngAfterViewInit() {
    console.log('hehe');
      console.log(this.myId.nativeElement.children);
      for (let i of this.myId.nativeElement.children) {
        console.log(i);
      }
  }
}
