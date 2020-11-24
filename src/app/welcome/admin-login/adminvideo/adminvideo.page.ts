import { Component, OnInit } from "@angular/core";
import { IonItemSliding } from "@ionic/angular";
import { VideoserviceService } from "../../videoservice.service";
import { VideoModel } from "../../videoStructure.model";

@Component({
  selector: "app-adminvideo",
  templateUrl: "./adminvideo.page.html",
  styleUrls: ["./adminvideo.page.scss"],
})
export class AdminvideoPage implements OnInit {
  video: VideoModel[] = [];
  isDataAvailable: boolean = false;
  constructor(private videoServiceObj: VideoserviceService) {}

  ngOnInit() {
    // console.log(Math.floor(Math.random() * 1001).toString());
    // this.video = await this.videoServiceObj.videoFromLocalStorage();
    // console.log("Video Sample", this.video);
    //this.video = this.videoServiceObj.videos;
  }

  async ionViewDidEnter() {
    // this.video = this.videoServiceObj.videos;
    await this.videoServiceObj.videoFromLocalStorage().then((data) => {
      this.video = data;
      console.log("Converted Movie from Local Storage", this.video);
      this.isDataAvailable = true;
    });
  }

  onVideoDelete(id: string, videoSlideRef: IonItemSliding) {
    videoSlideRef.close();
    this.videoServiceObj.deleteVideo(id);
    this.video = this.videoServiceObj.videos;
  }
}
