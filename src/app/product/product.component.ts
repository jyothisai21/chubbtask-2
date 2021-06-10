import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  currentProduct = 0;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProduct = this.activatedRoute.snapshot.params.id
  }

}


// /dashboard

// /product-list
// /product-create
// /product-edit/:id
// /product-view/:id

// /user-list
// /user-create
// /user-edit/:id
// /user-view/:id

// https://startbootstrap.com/previews/sb-admin