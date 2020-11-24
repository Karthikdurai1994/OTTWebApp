import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { VideoserviceService } from "../../videoservice.service";

@Component({
  selector: "app-admin-upload-video",
  templateUrl: "./admin-upload-video.page.html",
  styleUrls: ["./admin-upload-video.page.scss"],
})
export class AdminUploadVideoPage implements OnInit {
  @ViewChild("f") form: NgForm;
  @ViewChild("imagePick") imagePickRef: ElementRef;

  imageString: string;
  flag: boolean = false;
  imageFlag: boolean = false;
  constructor(
    private loadingCtrlObj: LoadingController,
    private videoServiceObj: VideoserviceService,
    private router: Router
  ) {}

  ngOnInit() {}
  onImagePick(image: string = "Default") {
    console.log(image);
    if (image.length === 0) {
      this.imageFlag = false;
    }
    this.flag = true;
    this.imageFlag = true;
    this.imageString = image;
  }

  onSubmit() {
    console.log(this.form.value);
    this.loadingCtrlObj
      .create({ keyboardClose: true, message: "Uploading Movie..." })
      .then((loadCtrlEle) => {
        loadCtrlEle.present();
        this.videoServiceObj.saveVideo(
          this.form.value.movieName,
          this.form.value.releaseYear,
          this.form.value.genre,
          this.form.value.language,
          this.form.value.rating,
          this.form.value.uploadDate,
          this.imageString
        );
        setTimeout(() => {
          loadCtrlEle.dismiss();
          this.router.navigateByUrl("welcome/adminLogin/adminmovie");
        }, 3000);
      });
  }

  delete() {
    //console.log(this.imagePickRef.nativeElement)
    this.imageFlag = false;
    this.form.reset();
  }
}
