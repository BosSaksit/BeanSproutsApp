import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    public menuCtrl: MenuController,
    private route: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "เก็บเงิน",
        url   : "/get-money-list",
        icon  : "wallet"
      },
      {
        title : "ขายสด",
        url   : "/salenow-list",
        icon  : "cash"
      },
      {
        title : "คืนของ",
        url   : "/return-product-list",
        icon  : "archive"
      },
    ]
  }
  logoutClicked(){
  this.route.navigate(['/login-page'])
  this.menuCtrl.close();
    
  }
}
