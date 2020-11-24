import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController, PopoverController } from "@ionic/angular";
import { CustompopoverComponent } from "src/app/shared/custompopover/custompopover.component";
import { VideoserviceService } from "../../videoservice.service";
import { VideoModel } from "../../videoStructure.model";
import { async } from "@angular/core/testing";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-subscribervideo",
  templateUrl: "./subscribervideo.page.html",
  styleUrls: ["./subscribervideo.page.scss"],
})
export class SubscribervideoPage implements OnInit {
  videos: VideoModel[] = [];
  isDataAvailable: boolean = false;
  constructor(
    private videoServiceObj: VideoserviceService,
    private router: Router,
    private popoverCtrl: PopoverController,
    private authServiceObj: AuthService
  ) {}
  async notifications(ev: any) {
    console.log("Came");
    const popover = await this.popoverCtrl.create({
      component: CustompopoverComponent,
      event: ev,
      animated: true,
      showBackdrop: true,
    });
    return await popover.present();
  }
  ngOnInit() {
    // this.videos = this.videoServiceObj.videos;
    // this.isDataAvailable = true;
  }

  async ionViewDidEnter(value) {
    if (value === "rating") {
      console.log("Came Ohh Success", value);
      this.videos = this.videoServiceObj.videoByRating();
    } else if (value === "dateAdded") {
      console.log("Came Ohh Success", value);
      this.videos = this.videoServiceObj.videoByDateAdded();
    } else if (value === "clear") {
      console.log("Came Ohh Success", value);
      await this.videoServiceObj.videoFromLocalStorage().then((data) => {
        this.videos = data;
        console.log("Converted Movie from Local Storage", this.videos);
        this.isDataAvailable = true;
      });
    } else {
      console.log("Came Ohh Success", value);
      await this.videoServiceObj.videoFromLocalStorage().then((data) => {
        this.videos = data;
        console.log("Converted Movie from Local Storage", this.videos);
        this.isDataAvailable = true;
      });
    }
  }

  onLogout() {
    // console.log("Came");
    // this.router.navigateByUrl("welcome");
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

  onSort(value) {
    this.ionViewDidEnter(value);
  }
}
