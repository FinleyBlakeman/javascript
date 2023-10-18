import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./root/app.component";
import {ClockComponent} from "./Component Library/clock/clock.component";
import {PreviewCardComponent} from "./Component Library/common/preview-card/preview-card.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageHeaderComponent} from "./Component Library/common/page-header/page-header.component";
import {ToggleComponent} from "./Component Library/toggle/toggle.component";
import {
  CircularImageGalleryComponent
} from "./Component Library/circular-image-gallery/circular-image-gallery.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    PreviewCardComponent,
    DashboardComponent,
    PageHeaderComponent,
    ToggleComponent,
    CircularImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
