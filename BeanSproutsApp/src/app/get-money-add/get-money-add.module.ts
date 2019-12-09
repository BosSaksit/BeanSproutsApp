import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetMoneyAddPageRoutingModule } from './get-money-add-routing.module';

import { GetMoneyAddPage } from './get-money-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetMoneyAddPageRoutingModule
  ],
  declarations: [GetMoneyAddPage]
})
export class GetMoneyAddPageModule {}
