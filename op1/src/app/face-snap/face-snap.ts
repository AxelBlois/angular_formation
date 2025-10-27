import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = "Oh snap!"
    this.userHasSnapped = false;
  }

  onSnap() {
    if (this.userHasSnapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = "Oh snap!"
      this.userHasSnapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = "Oops, unSnap";
      this.userHasSnapped = true;
    }

  }
}
