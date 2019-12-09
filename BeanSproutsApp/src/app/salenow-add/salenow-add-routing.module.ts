import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalenowAddPage } from './salenow-add.page';

const routes: Routes = [
  {
    path: '',
    component: SalenowAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalenowAddPageRoutingModule {}
