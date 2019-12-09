import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetMoneyAddPage } from './get-money-add.page';

const routes: Routes = [
  {
    path: '',
    component: GetMoneyAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetMoneyAddPageRoutingModule {}
