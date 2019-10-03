import { Component } from '@angular/core';

import { ConfigsService } from './services/configs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DI';

  constructor(private configsService: ConfigsService) {

  }
}
