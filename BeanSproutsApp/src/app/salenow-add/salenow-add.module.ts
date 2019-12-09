import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalenowAddPageRoutingModule } from './salenow-add-routing.module';

import { SalenowAddPage } from './salenow-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalenowAddPageRoutingModule
  ],
  declarations: [SalenowAddPage]
})
export class SalenowAddPageModule {}
