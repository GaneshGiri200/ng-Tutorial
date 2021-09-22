import { Component, OnInit } from '@angular/core';
import {employee} from '../shared/constant/constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  greeting:string = "Hello welcome in pipes";

  emp={
    id:101,
    name:"Balu",
    post:"Digital Marketing",
    salary:"6000"
  }

  date = new Date();

  students = employee;

  //created object of Router class in constructor
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  getId(val:any){
    this._router.navigate(['pipe',val]) //naviagte is method with teake array
  }
}
