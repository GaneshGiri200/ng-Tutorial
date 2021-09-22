import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  heading1:string = "Hematite infotech Pvt Ltd";
  image:string = "../assets/pic.jpg"
  altimag:string = "Tech Nature Image"
  userdata:string = ""

  constructor() { }

  ngOnInit(): void {
  }

    changeSize(){
    alert("hello");
  }

  sendData(data:any){
    alert("the data is:" +data);
  }

}
