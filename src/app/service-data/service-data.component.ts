import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../shared/services/myservice.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.scss']
})
export class ServiceDataComponent implements OnInit {

  empArray:any;
  order:string='';
  orderName:string ="";
  orderAddress:string ="";
  orderPost:string ="";
  reverse:boolean=true;

  constructor(private _empdata:MyserviceService) { } //dependancy injection

  ngOnInit(): void {

    this.empArray=this._empdata.DisplayEmpData();
  }

  nameOrder(){
    this.orderAddress = "";
    this.orderPost = "";
    this.order = "name";
    this.reverse =!this.reverse;
    if (this.reverse)
    {
      this.orderName = "Descending";
    }else {
      this.orderName = "Ascending";
    }
  }

  addressOrder() {
    this.orderName="";
    this.orderPost="";
    this.order = "address";
    this.reverse =!this.reverse;
    if (this.reverse)
    {
      this.orderAddress = "Descending";
    }else {
      this.orderAddress = "Ascending";
    }
  }

  postOrder() {
    this.orderAddress="";
    this.orderName="";
    this.order = "post";
    this.reverse =!this.reverse;
    if (this.reverse)
    {
      this.orderPost = "Descending";
    }else {
      this.orderPost = "Ascending";
    }
  }
}
