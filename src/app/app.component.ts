
import { Component, OnInit, DoCheck, OnChanges, AfterContentInit } from '@angular/core';
import { AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit,
  AfterContentChecked, AfterViewChecked, OnDestroy {
  title = 'app';

  constructor() {
    console.log('constructor works');
  }

  ngOnChanges() {
    console.log('change function works');
  }

  ngOnInit() {
    console.log('ngoninit works');
  }

  ngDoCheck() {
    console.log('checking function works');
  }

  ngAfterContentInit() {
    console.log('content init works');
  }

  ngAfterViewInit() {
    console.log('view init works');
  }

  ngAfterContentChecked() {
    console.log('content init checked');
  }

  ngAfterViewChecked() {
    console.log('view init checked');
  }

  ngOnDestroy() {
    console.log('on destroy works');
  }

}
