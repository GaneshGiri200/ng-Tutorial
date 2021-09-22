import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataServiceService} from 'src/app/shared/services/data-service.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  modalRef: any;
  p:number = 1;
  empData: any;
  searchKey:string='';
  order:string = '';
  reverse:boolean = true;
  dbError:any;

  constructor(private _dataService:DataServiceService,
    private modalService: BsModalService, private _globalSer:GlobalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    // this._dataService.getData().subscribe((res)=>{
    //   this.empData = res;
    // });
    this._globalSer.get("employee").subscribe((res)=>{
      this.empData = res;
    }, (error:any)=>{
      this.dbError=error;
    })
  }

  deleteData(id:any){
    if(confirm(`Are you sure to delete data record with id: ${id}`)){
      this._dataService.deleteRecord(id).subscribe(()=>{
      this.fetchData();
      alert("Record Deleted Successfully");
    });
    }
  }

  changeOrder() {
    this.order = 'name';
    this.reverse= !this.reverse;
  }

  //model pop up method
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
