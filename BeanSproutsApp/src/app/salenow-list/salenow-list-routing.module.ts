import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalenowListPage } from './salenow-list.page';

const routes: Routes = [
  {
    path: '',
    component: SalenowListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalenowListPageRoutingModule {}
