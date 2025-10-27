import {Component, OnInit, signal} from '@angular/core';
import {FaceSnap} from './models/face-snap';
import { HeaderComponent} from './header/header';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
  }


}
