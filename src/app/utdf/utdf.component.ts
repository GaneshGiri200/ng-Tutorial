import { Component, OnInit } from '@angular/core';
import {RegName, RegPassword, RegContact, RegEmail} from '../shared/constant/constant';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.scss']
})
export class UtdfComponent implements OnInit {

  myCourses:string[]=["java", "Python", "Angular", "MEAN Stack", "MERN Stack", "PHP"];

  namePattern= RegName;
  passwordPattern= RegEmail;
  contactPattern=RegContact;
  emailPattern=RegEmail;


  constructor() { }

  ngOnInit(): void {
  }

  getData(val:any){
    console.log(val);
  }
}
