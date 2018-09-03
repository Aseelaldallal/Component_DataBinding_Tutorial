import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulated is default. None = avoid css encapsulation. Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Pass alias into input
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('Constructor Called')
  }

  // Lifecycle hook - called once component is initialized
  ngOnInit() {
    console.log('ngOnInit Called');
  }

  // Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called: ', changes);
  }

  // Called during every change detection run. On every check for change, not on every change. Lets say you
  // clicked somewhere. Triggers: Promise gave us data, event. Don't run powerful code here, will cost us. 
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // Called after content (ng-content) has been projected into view.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // Called every time the projected content has been checked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // Called after the component's view (and child views) has been initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // Called every time the view (and child views) has been checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Called once the component is about to be destroyed
  ngOnDestroy() {
    console.log('ngonDestroy');
  }

}
