import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from'src/app/shared/services/data-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number=0;
  empObj:any;

  constructor(private _ActRoute:ActivatedRoute,
    private _empService:DataServiceService,
    private _router:Router) { }

  ngOnInit(): void {
    this._ActRoute.params.subscribe((para)=>{
      this.id = Number(para.id);
    })
    this._empService.getSingleRecord(this.id).subscribe((res)=>{
      this.empObj = {...res}; //using spread operator for get individual key
    })
  }

  addData(val:any){
    const empObj={
      id:this.id,
      name:val.name,
      post:val.post,
      gender:val.gender,
      salary:val.salary
    }
    this._empService.updateRecord(empObj).subscribe(()=>{
      alert(`Record Updated Succesfully with id ${this.id}`);
      this._router.navigate(['/crud']);
    })
  }

}
