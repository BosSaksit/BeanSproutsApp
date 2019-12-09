import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salenow-add',
  templateUrl: './salenow-add.page.html',
  styleUrls: ['./salenow-add.page.scss'],
})
export class SalenowAddPage implements OnInit {

  constructor(public route: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการบันทึกข้อมูล',
      message: 'รายการขายสด <br> นาย พรชัย  <br> ถั่วงอก  <br>  จำนวน : 20  <br>  ราคารวม : 100   ',
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
            this.route.navigate(['/salenow-list'])
          }
        }
      ]
    });

    await alert.present();
  }
}
