import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment';
  constructor() {}

  ngOnInit() {}
  myFunction() {
    const x = document.getElementById('navDemo');
    if (x.className.indexOf('w3-show') === -1) {
      x.className += ' w3-show';
    } else {
      x.className = x.className.replace(' w3-show', '');
    }
  }
}
