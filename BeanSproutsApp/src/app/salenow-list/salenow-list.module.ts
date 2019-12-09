import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalenowListPageRoutingModule } from './salenow-list-routing.module';

import { SalenowListPage } from './salenow-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalenowListPageRoutingModule
  ],
  declarations: [SalenowListPage]
})
export class SalenowListPageModule {}
