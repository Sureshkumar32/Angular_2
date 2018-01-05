import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-consolecomp',
  templateUrl: './consolecomp.component.html',
  styleUrls: ['./consolecomp.component.css']
})

export class ConsolecompComponent implements OnInit {

  constructor() {
    console.log('hai');
   }

  ngOnInit() {
    console.log('hello');
  }

}
