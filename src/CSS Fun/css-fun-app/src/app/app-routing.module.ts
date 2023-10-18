import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ClockComponent} from "./Component Library/clock/clock.component";
import {ToggleComponent} from "./Component Library/toggle/toggle.component";
import {
  CircularImageGalleryComponent
} from "./Component Library/circular-image-gallery/circular-image-gallery.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'circular-gallery', component: CircularImageGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
