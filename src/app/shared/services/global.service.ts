import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {base_url} from 'src/app/shared/constant/constant';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //header
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private _http:HttpClient) { }

  //mehtod for error handeling
  formateError(error:any){
    return throwError(error.message);
  }

  // formateError(error:HttpErrorResponse){
  //   return throwError(error.message || 'Internal Server Error');
  // }


  //global get mehtod
  get(path:string):Observable<any>{
    return this._http.get(base_url+path).pipe(catchError(this.formateError))
  }

  //get single record
  getSingleRecord(path:string,id:any){
    const url=`${base_url+path}/${id}`;
    return this._http.get(url).pipe(catchError(this.formateError))
  }

  //edit records
  updateRecord(path:string, id:any, body:{}){
    const url=`${base_url+path}/${id}`;
    this._http.put(url, body).pipe(catchError(this.formateError))
  }

  //add record
  addData(path:string, body:{}){
    this._http.post(base_url+path,body).pipe(catchError(this.formateError))
  }

  //delete Record
  deleteRecord(path:string, id:number){
    const url=`${base_url+path}/${id}`;
    this._http.delete(url).pipe(catchError(this.formateError))
  }

  //session storage
  signIn(user:any) {
    sessionStorage.setItem('user', user);
  }

  signOut(){
    sessionStorage.removeItem('user');
  }
  
}
