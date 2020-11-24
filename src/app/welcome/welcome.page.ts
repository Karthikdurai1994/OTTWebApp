import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { VideoserviceService } from "./videoservice.service";
const { Storage } = Plugins;
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  constructor(private videoServiceObj: VideoserviceService) {}

  ngOnInit() {}

  async ionViewDidEnter() {
    console.log("App Component TS File Came");
    const { keys } = await Storage.keys();
    const keyResult = keys.find((k) => {
      return k === "Movies";
    });
    console.log("Key is: ", keyResult);
    if (keyResult != "Movies") {
      console.log("KeyResult is: ", keyResult);
      await Storage.set({
        key: "Movies",
        value: JSON.stringify(this.videoServiceObj.videos),
      });
    }
  }
}
