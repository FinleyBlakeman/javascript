import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent {
  @Input() cardTitle: string = 'Css';
  @Input() cardIcon: string = 'home';
  @Input() cardDescription: string = 'Something something 123';
  @Input() cardColor: string = 'grey';
  @Input() cardRoute: string = '';
  @Input() textColor: string = 'black';

  constructor(private route: Router) {}

  public navigateFromCard = () => {
    this.route.navigate([this.cardRoute]).then();
  }
}
