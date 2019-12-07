import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnProductAddPage } from './return-product-add.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnProductAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnProductAddPageRoutingModule {}
