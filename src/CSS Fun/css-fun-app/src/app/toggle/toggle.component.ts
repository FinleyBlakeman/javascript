import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit{
  greeting: string = '';
  greetingColors: string = '';

  ngOnInit() {
    this.setGoodNight();
  }

  public toggleClicked = () => {
    this.greeting === 'Good Night'
                    ? this.setGoodMorning()
                    : this.setGoodNight();
  }

  private setGoodNight = () => {
    this.greeting = 'Good Night';
    this.greetingColors = 'background-color: #000000; color: #ffffff'
  }

  private setGoodMorning = () => {
    this.greeting = 'Good Morning';
    this.greetingColors = 'background-color: #ffffff; color: #000000'
  }
}
