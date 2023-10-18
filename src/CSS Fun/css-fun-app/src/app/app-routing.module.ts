import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ClockComponent} from "./clock/clock.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ToggleComponent} from "./toggle/toggle.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'toggle', component: ToggleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
