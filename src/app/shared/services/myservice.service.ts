import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  empData:any;

  DisplayEmpData() {
    return this.empData = [
      {
        id:101,
        name: "Ganesh",
        contact: 369999999,
        gender: "male",
        address: "Pune",
        salary: 75000,
        post: "MEAN stack"
      },
      {
        id:102,
        name: "Suresh",
        contact: 33427999,
        gender: "male",
        address: "Delhi",
        salary: 70000,
        post: "MERN stack"
      },
      {
        id:103,
        name: "Vishal",
        contact: 833239999,
        gender: "male",
        address: "Nagpur",
        salary: 60000,
        post: "JAVA stack"
      },
      {
        id:104,
        name: "Prachi",
        contact: 82499999,
        gender: "female",
        address: "Solapur",
        salary: 70000,
        post: "Python stack"
      },
      {
        id:105,
        name: "Meena",
        contact: 58375999,
        gender: "female",
        address: "Akola",
        salary: 75000,
        post: "Ruby stack"
      },
      {
        id:106,
        name: "Ranjeet",
        contact: 82499999,
        gender: "male",
        address: "Mumbai",
        salary: 70000,
        post: "Android stack"
      },
      {
        id:107,
        name: "Shruti",
        contact: 82499999,
        gender: "female",
        address: "Kokan",
        salary: 70000,
        post: "Angular stack"
      }
    ] 
  }
}
