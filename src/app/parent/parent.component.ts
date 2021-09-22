import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  myData:any;
  childData:any;

  @ViewChild('ChildComponent') counter:ChildComponent | undefined;
  message: string | undefined ='hello';

  constructor() { }

  ngOnInit(): void {
  }

  getData(val:any){
    this.myData = val;
    console.log("The Data is: "+this.myData);
  }

  incrementMyValue(){
    this.counter?.increment1();
    this.message = this.counter?.counterMsg;
  }
}
