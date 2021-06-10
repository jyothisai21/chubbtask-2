import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl : './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  productsList:string[ ]=["product1","product2","product3"];
  dropdown:boolean=false
  usersList:string[ ]=["user1","user2","user3"];
  dropdown1:boolean=false

  constructor() { }


  ngOnInit(): void {
  }
  onclick(){
   if(this.dropdown==true)
   this.dropdown=false;
   else
   this.dropdown=true;
  }
  onclick1(){
    if(this.dropdown1==true)
    this.dropdown1=false;
    else
    this.dropdown1=true;
   }
 
}
