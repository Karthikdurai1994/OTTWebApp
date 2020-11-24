import { Component, OnInit } from "@angular/core";
import { async } from "@angular/core/testing";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.page.html",
  styleUrls: ["./admin-login.page.scss"],
})
export class AdminLoginPage implements OnInit {
  isLogin = true;
  constructor(
    private router: Router,
    private authServiceObj: AuthService,
    private alertCtrlObj: AlertController
  ) {}

  ngOnInit() {}
  onAuthToogle() {
    this.isLogin = !this.isLogin;
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const mailID = form.value.email;
    const password = form.value.password;
    // console.log(mailID, password);
    // this.router.navigateByUrl("welcome/adminLogin/adminmovie");
    if (this.isLogin) {
      this.authServiceObj.login(mailID, password).then(
        (data) => {
          console.log(data);
          this.router.navigateByUrl("welcome/adminLogin/adminmovie");
        },
        async (error) => {
          console.log(error);
          let errorMsg = "Can't Login, Try again later";
          if (error.code === "auth/invalid-email") {
            errorMsg = "Enter Valid Email ID";
          } else if (error.code === "auth/wrong-password") {
            errorMsg = "Password is incorrect";
          } else if (error.code === "auth/user-not-found") {
            errorMsg = "Email or Password is incorrect";
          }
          const alert = await this.alertCtrlObj.create({
            message: errorMsg,
            buttons: [{ text: "Ok", role: "cancel" }],
          });
          await alert.present();
        }
      );
    } else {
      this.authServiceObj.signUp(mailID, password).then(
        (data) => {
          console.log(data);
          this.router.navigateByUrl("welcome/adminLogin/adminmovie");
        },
        async (error) => {
          console.log(error);
          let errorMsg = "Can't Login, Try again later";
          if (error.code === "auth/email-already-in-use") {
            errorMsg = "Email already used";
          } else if (error.code === "auth/invalid-email") {
            errorMsg = "Enter Valid Email ID";
          }
          const alert = await this.alertCtrlObj.create({
            message: errorMsg,
            buttons: [{ text: "Ok", role: "cancel" }],
          });
          await alert.present();
        }
      );
    }
  }
}
