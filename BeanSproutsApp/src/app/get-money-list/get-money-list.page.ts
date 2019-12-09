import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-money-list',
  templateUrl: './get-money-list.page.html',
  styleUrls: ['./get-money-list.page.scss'],
})
export class GetMoneyListPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  gopageGetMoneyAdd(){
    this.route.navigate(['/get-money-add'])
  }
}
