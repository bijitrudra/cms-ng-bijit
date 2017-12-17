import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  myview() {
  	this.router.navigate(['./myworkitem']);
  }

  search() {
  	this.router.navigate(['./search']);
  }

  create() {
  	this.router.navigate(['./create']);
  }
}
