import {
  Component, Output, OnInit, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges,
  Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  @Input() defaultServerName: string;
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
    //called first
    console.log('constructor');
  }

  ngOnInit() {
    //after constructor, properties are readily accessible
    //called once, after the first ngOnChanges()
    console.log('init');
  }

  ngOnChanges(changes: SimpleChanges) {
    //called when data-bound input properties are set/reset
    //called after the constructor
    console.log('changes:', changes);
  }

  ngDoCheck() {
    //called when angular checks for changes:
    //lots of triggers
    console.log('do check');
  }

  ngAfterContentInit(): void {
    //after view is projected
    console.log('after init');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  /* passing a local reference from template */
  onAddServer(serverNameInput: HTMLInputElement) {
    var serverName = serverNameInput.value;
    if (!serverName) {
      serverName = this.defaultServerName;
    }

    this.serverCreated.emit({
      name: serverName,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

}
