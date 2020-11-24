import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';
import { VideoserviceService } from 'src/app/welcome/videoservice.service';
import { VideoModel } from 'src/app/welcome/videoStructure.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {
  movieID: string
  movie:VideoModel;
  isLoadable:boolean=false;
  connectedLine: string;
  rate:any
  
  constructor(private activateRoute: ActivatedRoute,private videoServiceObj: VideoserviceService) {
    
   }


  ngOnInit() {
    
    this.activateRoute.paramMap.subscribe(paramMap=>{
       this.movieID = paramMap.get("movieID");
       this.movie=this.videoServiceObj.videoSingle(this.movieID);
       this.isLoadable=true;
       this.connectedLine = this.movie.language+". "+this.movie.year +". "+this.movie.genre+". "+this.movie.rating
       console.log(this.movie);
    })
  }
 
  
  onModelChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}


}
