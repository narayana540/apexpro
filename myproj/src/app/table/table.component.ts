import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../my.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
users:any;
// id11:any;
  constructor(private se:MyService,private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.se.getAllUsers().subscribe(res=>{
      this.users=res;
      console.log("getalldata",this.users)
    })
  }
  // getId(id1){
  //   console.log("id1 value is",id1)
  //  this.se.getbyid(id1).subscribe(resData=>{
  //    console.log("getIdData",resData);
  //    this.id11=id1;
  //  })
  //  this.router.navigate(['/details',id1])
  // }
}
