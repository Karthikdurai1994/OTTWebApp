import { Injectable } from "@angular/core";
import { VideoModel } from "./videoStructure.model";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
@Injectable({
  providedIn: "root",
})
export class VideoserviceService {
  private video: VideoModel[] = [
    // new VideoModel(
    //   "1",
    //   "Avengers Endgame",
    //   2019,
    //   "Action",
    //   "English",
    //   new Date("2020-11-02"),
    //   4,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4474/674474-v"
    // ),
    // new VideoModel(
    //   "2",
    //   "Chhichhore",
    //   2019,
    //   "Family",
    //   "Hindi",
    //   new Date("2020-11-03"),
    //   4.4,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
    // ),
    // new VideoModel(
    //   "3",
    //   "Chekka Chevantha Vanam",
    //   2018,
    //   "Action",
    //   "Tamil",
    //   new Date("2020-11-01"),
    //   3,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6754/146754-v"
    // ),
    // new VideoModel(
    //   "4",
    //   "MS Dhoni",
    //   2016,
    //   "Biopic",
    //   "Tamil",
    //   new Date("2020-11-03"),
    //   4.3,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2657/532657-v"
    // ),
    // new VideoModel(
    //   "5",
    //   "Super 30",
    //   2019,
    //   "Biopic",
    //   "Hindi",
    //   new Date("2020-09-03"),
    //   4,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
    // ),
    // new VideoModel(
    //   "6",
    //   "The Incredibles",
    //   2004,
    //   "Kids",
    //   "English",
    //   new Date("2020-11-03"),
    //   3.8,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4512/674512-v"
    // ),
    // new VideoModel(
    //   "7",
    //   "Toy Story 3",
    //   2010,
    //   "Kids",
    //   "English",
    //   new Date("2020-06-03"),
    //   4.0,
    //   "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4588/674588-v"
    // ),
  ];

  private videoLocalStorage: VideoModel[] = [
    new VideoModel(
      "1",
      "Avengers Endgame",
      2019,
      "Action",
      "English",
      new Date("2020-11-02"),
      4,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4474/674474-v"
    ),
    new VideoModel(
      "2",
      "Chhichhore",
      2019,
      "Family",
      "Hindi",
      new Date("2020-11-03"),
      4.4,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
    ),
    new VideoModel(
      "3",
      "Chekka Chevantha Vanam",
      2018,
      "Action",
      "Tamil",
      new Date("2020-11-01"),
      3,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6754/146754-v"
    ),
    new VideoModel(
      "4",
      "MS Dhoni",
      2016,
      "Biopic",
      "Tamil",
      new Date("2020-11-03"),
      4.3,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2657/532657-v"
    ),
    new VideoModel(
      "5",
      "Super 30",
      2019,
      "Biopic",
      "Hindi",
      new Date("2020-09-03"),
      4,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
    ),
    new VideoModel(
      "6",
      "The Incredibles",
      2004,
      "Kids",
      "English",
      new Date("2020-11-03"),
      3.8,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4512/674512-v"
    ),
    new VideoModel(
      "7",
      "Toy Story 3",
      2010,
      "Kids",
      "English",
      new Date("2020-06-03"),
      4.0,
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4588/674588-v"
    ),
  ];

  constructor() {}
  get videos() {
    return [...this.videoLocalStorage];
  }

  async videoFromLocalStorage() {
    let res = await Storage.get({ key: "Movies" });
    this.videoLocalStorage = JSON.parse(res.value);
    console.log("Local Storage Movies: ", this.videoLocalStorage);
    this.videoLocalStorage.map((v) => {
      return (v.uploadDate = new Date(v.uploadDate));
    });
    return this.videoLocalStorage;
  }

  videoSingle(id: string) {
    return this.videoLocalStorage.find((f) => {
      return f.id === id;
    });
  }

  videoByLanguage(language: string) {
    let videoLang = this.videoLocalStorage.filter((v) => {
      return v.language === language;
    });
    return videoLang;
  }

  videoByGenre(genre: string) {
    let videoGenre = this.videoLocalStorage.filter((v) => {
      return v.genre === genre;
    });
    return videoGenre;
  }

  videoByRating() {
    let sortVideo: VideoModel[] = [...this.videoLocalStorage].sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else if (a.rating > b.rating) {
        return -1;
      }
    });
    console.log(sortVideo);
    return [...sortVideo];
  }

  videoByDateAdded() {
    let sortVideo: VideoModel[] = [...this.videoLocalStorage].sort((a, b) => {
      if (a.uploadDate < b.uploadDate) {
        return 1;
      } else if (a.uploadDate > b.uploadDate) {
        return -1;
      }
    });
    console.log(sortVideo);
    return [...sortVideo];
  }
  async saveVideo(
    name: string,
    year: number,
    genre: string,
    language: string,
    rating: number,
    videoUploadDate: Date,
    imageURL: string
  ) {
    const v = new VideoModel(
      Math.floor(Math.random() * 1001).toString(),
      name,
      year,
      genre,
      language,
      new Date(videoUploadDate),
      rating,
      imageURL
    );
    //  this.video.push(v);
    this.videoLocalStorage.push(v);
    await Storage.remove({ key: "Movies" });
    await Storage.set({
      key: "Movies",
      value: JSON.stringify(this.videoLocalStorage),
    });
  }

  async deleteVideo(id: string) {
    this.videoLocalStorage = this.videoLocalStorage.filter((v) => {
      return id != v.id;
    });
    await Storage.remove({ key: "Movies" });
    await Storage.set({
      key: "Movies",
      value: JSON.stringify(this.videoLocalStorage),
    });
  }
}
