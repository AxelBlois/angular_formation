import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = "Oh snap!"
    this.userHasSnapped = false;
  }
}
