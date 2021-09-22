import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  counterMsg:string='';
  counterVal:number=0;
  @Input() parentData:any; //input decorator need to be imported in angular core (line no 1)
  @Output() eventData=new EventEmitter();
  //Onput decorator as well as EventEmitter need to be imported in angular core (line no 1)

  constructor() { }

  ngOnInit(): void {
  }

  getData(val:any) {
    this.eventData.emit(val);
  }

  increment1() {
    console.log('hi');
    this.counterVal+=1;
    this.counterMsg=this.counterMsg+this.counterVal;

  }

  decrement() {
    this.counterVal-=1;
    this.counterMsg+=this.counterMsg+this.counterVal;
  }
}
