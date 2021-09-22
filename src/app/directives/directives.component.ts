import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  isCondition:boolean = true;
  developer:String[] = ["MEAN Stack","MERN stack","PHP", "Front-end", "Back-end"];
  selDev:String = 'MEAN Stack';

  myCss = {
    color: "blue",
    border: "2px solid red",
    width: "200px",
    backgroundColor: "yellow",
    borderRadius: "8px",
    textAlign: "center"
  }

  myCssClass = {
    "txt-tomato" : this.isCondition,
    "bgColor" : this.isCondition,
    "special" : this.isCondition
  }

  constructor() { }

  ngOnInit(): void {
  }

  switchIf() {
    if(this.isCondition === true)
      this.isCondition = false;
    else
      this.isCondition = true;
  }

}
