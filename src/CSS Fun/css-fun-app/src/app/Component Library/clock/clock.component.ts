import {Component, OnInit} from '@angular/core';

export interface ClockTime {
  calculationVersion: number;
  displayVersion: string;
}

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit{
  clockTime: Date = new Date();
  times: ClockTime[] = [];

  ngOnInit() {
    this.setCurrentTime();
    this.times = [
      {calculationVersion: 12, displayVersion: 'XII'},
      {calculationVersion: 12, displayVersion: 'I'},
      {calculationVersion: 12, displayVersion: 'II'},
      {calculationVersion: 12, displayVersion: 'III'},
      {calculationVersion: 12, displayVersion: 'IV'},
      {calculationVersion: 12, displayVersion: 'V'},
      {calculationVersion: 12, displayVersion: 'VI'},
      {calculationVersion: 12, displayVersion: 'VII'},
      {calculationVersion: 12, displayVersion: 'VIII'},
      {calculationVersion: 12, displayVersion: 'IX'},
      {calculationVersion: 12, displayVersion: 'X'},
      {calculationVersion: 12, displayVersion: 'XI'}
    ];
  }

  setCurrentTime = () => {
    const hour = -3600 * (this.clockTime.getHours() % 12);
    const mins = -60 * this.clockTime.getMinutes();
    document.getElementById("app")?.style.setProperty('--_dm', `${mins}s`);
    document.getElementById("app")?.style.setProperty('--_dh', `${(hour+mins)}s`);
  }
}
