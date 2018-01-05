import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolecompComponent } from './consolecomp.component';

describe('ConsolecompComponent', () => {
  let component: ConsolecompComponent;
  let fixture: ComponentFixture<ConsolecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
