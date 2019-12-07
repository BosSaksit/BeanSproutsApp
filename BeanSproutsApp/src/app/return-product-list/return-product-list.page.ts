import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-product-list',
  templateUrl: './return-product-list.page.html',
  styleUrls: ['./return-product-list.page.scss'],
})
export class ReturnProductListPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  gopageReturnProductAdd(){
    this.route.navigate(['/return-product-add'])
  }
}
