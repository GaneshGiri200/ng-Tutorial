import { Component, OnInit } from '@angular/core';
import {DataServiceService} from'src/app/shared/services/data-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _empService:DataServiceService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  addData(val:any){
    const empObj = {
      name:val.name,
      post:val.post,
      gender:val.gender,
      salary:val.salary
    }
    this._empService.addRecord(empObj).subscribe(()=>{
      alert("Data Added Successfully");
      this._router.navigate(['/crud']);
    });
  }
}
