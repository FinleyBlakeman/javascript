import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent implements OnInit{
  title = 'Finley\'s CSS Portfolio';
  dashIcon = 'apps';
  contactIcon = 'call';
  aboutIcon = 'person';

  ngOnInit() {}
}
