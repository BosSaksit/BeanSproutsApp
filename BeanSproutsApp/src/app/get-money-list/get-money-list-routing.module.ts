import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetMoneyListPage } from './get-money-list.page';

const routes: Routes = [
  {
    path: '',
    component: GetMoneyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetMoneyListPageRoutingModule {}
