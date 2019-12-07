import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnProductAddPageRoutingModule } from './return-product-add-routing.module';

import { ReturnProductAddPage } from './return-product-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnProductAddPageRoutingModule
  ],
  declarations: [ReturnProductAddPage]
})
export class ReturnProductAddPageModule {}
