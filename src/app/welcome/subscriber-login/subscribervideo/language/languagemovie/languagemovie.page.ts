import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoserviceService } from 'src/app/welcome/videoservice.service';
import { VideoModel } from 'src/app/welcome/videoStructure.model';

@Component({
  selector: 'app-languagemovie',
  templateUrl: './languagemovie.page.html',
  styleUrls: ['./languagemovie.page.scss'],
})
export class LanguagemoviePage implements OnInit {
  languageOption:string;
  movie: VideoModel[]=[];
  isDataAvailable:boolean = false;
  flag: boolean = true;
  constructor(private activateRoute: ActivatedRoute, private videoServiceObj: VideoserviceService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap=>{
      this.languageOption = paramMap.get("languageoption");
      console.log(this.languageOption)
      this.movie = this.videoServiceObj.videoByLanguage(this.languageOption);
      this.isDataAvailable= true;
      console.log(this.movie);

    })
  }

  ionViewDidEnter(){
    this.activateRoute.paramMap.subscribe(paramMap=>{
      this.languageOption = paramMap.get("languageoption");
      console.log(this.languageOption)
      this.movie = this.videoServiceObj.videoByLanguage(this.languageOption);
      this.isDataAvailable= true;
      console.log(this.movie);

    })
  }

}
