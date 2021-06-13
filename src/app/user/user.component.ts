import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser = 0;
  constructor(private activatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.currentUser = this.activatedRoute.snapshot.params.id
  }

}
