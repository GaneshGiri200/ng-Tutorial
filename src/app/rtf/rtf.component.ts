import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {RegName, RegPassword, RegContact, RegEmail} from '../shared/constant/constant';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.scss']
})
export class RtfComponent implements OnInit {

  emp:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.emp = new FormGroup({
      empName:new FormControl('',[Validators.required, Validators.pattern(RegName)]),
      empPassword: new FormControl('',[Validators.required, Validators.pattern(RegPassword)]),
      empContact: new FormControl('',[Validators.required, Validators.pattern(RegContact)]),
      empEmail:new FormControl('',[Validators.required, Validators.pattern(RegEmail)]),
      empPost:new FormControl('',[Validators.required]),
      empDOB:new FormControl('',[Validators.required])
    })

  this.emp = this.fb.group({
    empName:['', Validators.required, Validators.pattern(RegName)],
    empPassword: ['', Validators.required, Validators.pattern(RegPassword)]
  })

}
}
