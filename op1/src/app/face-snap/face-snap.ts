import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) {}
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = "Oh snap!"
    this.userHasSnapped = false;
  }

  onSnap() {
    if (this.userHasSnapped) this.unSnap();
    else this.snap();
  }

  unSnap() {
    this.faceSnapsService.unSnapFaceSnapById(this.faceSnap.id);
    this.snapButtonText = "Oh snap!"
    this.userHasSnapped = false;
  }

  snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
    this.snapButtonText = "Oops, unSnap";
    this.userHasSnapped = true;
  }

}
