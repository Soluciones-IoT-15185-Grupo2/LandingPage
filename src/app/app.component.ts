import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LandingCompleteComponent} from './public/pages/landing-complete/landing-complete.component';

@Component({
  selector: 'app-root',
  imports: [LandingCompleteComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartSign';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ES');
    this.translate.use('ES');
  }
}
