import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salenow-list',
  templateUrl: './salenow-list.page.html',
  styleUrls: ['./salenow-list.page.scss'],
})
export class SalenowListPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  gopageSaleNowAdd(){

    this.route.navigate(['/salenow-add'])
  }
}
