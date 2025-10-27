import {Routes} from '@angular/router';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list';
import {LandingPageComponent} from './landing-page/landing-page';
import {SingleFaceSnapComponent} from './single-face-snap/single-face-snap';

export const routes: Routes = [
  { path:'facesnaps/:id',component:SingleFaceSnapComponent},
  { path: 'facesnaps', component: FaceSnapListComponent},
  { path: '', component: LandingPageComponent}
];

