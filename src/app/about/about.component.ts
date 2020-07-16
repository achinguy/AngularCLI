import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  //templateUrl: './about.component.html',
  template: `<h1 my-highlighter>
    My First Directive.
  </h1>`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }

}
