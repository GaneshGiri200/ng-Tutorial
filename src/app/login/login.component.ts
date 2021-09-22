import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/services/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  uId:string="";
  uPass:string="";
  userData:any[] = [];
  dbError:any;

  constructor(private _globalSer:GlobalService, private _router:Router) { }

  ngOnInit(): void {
    this._globalSer.signOut();
  }

  getData(){
    this._globalSer.get("users").subscribe((res)=>{
      this.userData = res;
      const data = this.userData.filter((items:any)=> { return (items.user === this.uId) && (items.password === this.uPass)})
      if(data){
        this._globalSer.signIn(this.uId);
        this._router.navigate(['databinding']);
      // this.uId = "";
      // this.uPass = "";

      }else {
        alert("Wrong userId and password");
        this.uId = "";
        this.uPass = "";
      }
    // console.log(`Entered username: ${this.uId} & Password: ${this.uPass}`);

      // console.log(this.userData);
    });

  }
}
