import {Component, OnInit, signal} from '@angular/core';
import {FaceSnap} from './models/face-snap';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list';
import {Header} from './header/header';


@Component({
  selector: 'app-root',
  imports: [
    FaceSnapListComponent,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  faceSnaps!: FaceSnap[];


  ngOnInit(): void {
  }


}
