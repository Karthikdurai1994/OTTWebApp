import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { AuthService } from "./welcome/auth.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authServiceObj: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.default.initializeApp(firebaseConfig);
  }

  logout() {
    console.log("Came to logout function");
    //  this.router.navigateByUrl("welcome");
    this.authServiceObj.logout().then(
      (data) => {
        console.log(data);
        this.router.navigateByUrl("welcome");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
