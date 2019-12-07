import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-return-product-add',
  templateUrl: './return-product-add.page.html',
  styleUrls: ['./return-product-add.page.scss'],
})
export class ReturnProductAddPage implements OnInit {

  constructor(public route: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการบันทึกข้อมูล',
      message: 'รายการคืนของ  ',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Confirm Okay');
            this.route.navigate(['/return-product-list'])
          }
        }
      ]
    });

    await alert.present();
  }
}
