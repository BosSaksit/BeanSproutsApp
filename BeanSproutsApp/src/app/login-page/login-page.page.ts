import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(public route: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

      gopageReturnProductList(){
      this.route.navigate(['/return-product-list'])
}

}
