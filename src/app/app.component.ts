import { Component, VERSION } from '@angular/core';
import './lib/jquery/jquery-1.10.2.min.js';
import './lib/jquery/jquery-ui.js';
import './vendor/edq/myAccountEdqScript.js';
// import './lib/jquery/jquery-ui.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  
  ngAfterViewInit() {
    let win = window && (window as any);
    setTimeout(function () {
      win['configureAndInitializeEDQ'] && win.configureAndInitializeEDQ();
    }, 1000);
  }

  submitForm() {
    console.debug('Form submitted!');
  }
}
