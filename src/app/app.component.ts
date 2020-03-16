import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carrycot shopping';
  navToDisplay = '';
  onSelectedNav(nav: string) {
    this.navToDisplay = nav;
  }
}
