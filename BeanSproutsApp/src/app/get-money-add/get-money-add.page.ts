import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-money-add',
  templateUrl: './get-money-add.page.html',
  styleUrls: ['./get-money-add.page.scss'],
})
export class GetMoneyAddPage implements OnInit {

  constructor(public route: Router,public alertController: AlertController) { }
    name1:any;
    
    
    
  ngOnInit() {
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'กรอกจำนวนเงิน',
      inputs: [
        {
          name: 'name',
          type: 'text',
          
           placeholder: 'จำนวนเงิน'
        }
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.name1 = alertData.name
            this.presentAlertPrompt1();
            



            
            console.log('Confirm Ok');
            console.log(alertData.name);
            
          }
        }
      ]
    });

    await alert.present();
  }




  async presentAlertPrompt1() {
    const alert = await this.alertController.create({
      header: 'กรอกจำนวนเงิน',
      inputs: [
        {
          name: 'name',
          type: 'text',
          
           placeholder: 'จำนวนเงิน'
        }
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            console.log();
            
          }
        }
      ]
    });

    await alert.present();
  }
}
