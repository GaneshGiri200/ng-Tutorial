import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; //imported from rxjs for observable
import {Employee} from '../interfaces/employee.model';
import {empAPI} from 'src/app/shared/constant/constant';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private _http:HttpClient) { } //created object of HttpClient in constructor

  //get record form the database
  getData():Observable<Employee[]>{
    return this._http.get<Employee[]>(empAPI);
  }

  //delete data from database
  deleteRecord(id:any){
    const baseURl=`${empAPI}/${id}`; //http://localhost:3000/employee/id
    return this._http.delete(baseURl);
  }

  //add data to database
  addRecord(emp:any){
    return this._http.post(empAPI,emp);
  }

  //get single record for edit
  getSingleRecord(id:any){
    const baseURl=`${empAPI}/${id}`;
    return this._http.get(baseURl);
  }

  //update Record 
  updateRecord(emp:any){
    const baseURl=`${empAPI}/${emp.id}`;
    return this._http.put(baseURl,emp);
  }
}
