import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoserviceService } from 'src/app/welcome/videoservice.service';
import { VideoModel } from 'src/app/welcome/videoStructure.model';

@Component({
  selector: 'app-genremovie',
  templateUrl: './genremovie.page.html',
  styleUrls: ['./genremovie.page.scss'],
})
export class GenremoviePage implements OnInit {
  genreOption: string;
  movie: VideoModel[]=[];
  isDataAvailable:boolean = false;
  flag: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private videoServiceObj: VideoserviceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parammap=>{
      this.genreOption = parammap.get("genreoption");
      //console.log(this.genreOption);
      this.movie = this.videoServiceObj.videoByGenre(this.genreOption);
      this.isDataAvailable= true;
      console.log(this.movie);
    })
  }

  ionViewDidEnter(){
    this.activatedRoute.paramMap.subscribe(parammap=>{
      this.genreOption = parammap.get("genreoption");
      //console.log(this.genreOption);
      this.movie = this.videoServiceObj.videoByGenre(this.genreOption);
      this.isDataAvailable= true;
      console.log(this.movie);
    })
  }

}
