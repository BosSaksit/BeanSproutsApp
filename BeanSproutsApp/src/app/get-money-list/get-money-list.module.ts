import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetMoneyListPageRoutingModule } from './get-money-list-routing.module';

import { GetMoneyListPage } from './get-money-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetMoneyListPageRoutingModule
  ],
  declarations: [GetMoneyListPage]
})
export class GetMoneyListPageModule {}
