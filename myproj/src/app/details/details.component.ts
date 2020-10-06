import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  idvalue:any;
  id:any;
  data:any;
  array=[];
  getName:any;
   
  

  constructor(private ar:ActivatedRoute,private ser:MyService) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params["id"];
    console.log(this.id);
    this.ser.getbyid(this.id).subscribe(res=>{
     this.data=res;
     console.log(this.data);
    //  this.array.push(res);
    //  this.getName=this.array.map(username=>username.name);
    //   console.log(this.getName);
      
    })
  }
  


}
