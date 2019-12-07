import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnProductListPageRoutingModule } from './return-product-list-routing.module';

import { ReturnProductListPage } from './return-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnProductListPageRoutingModule
  ],
  declarations: [ReturnProductListPage]
})
export class ReturnProductListPageModule {}
