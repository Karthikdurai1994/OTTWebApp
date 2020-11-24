import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
   language=[{
    "lang": "Tamil",
    "imageURL": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/550/-/0/jio_vod_img/publisher/Tamil_1598518389113_l_medium.jpg"
  },
  {
    "lang": "Hindi",
    "imageURL": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/550/-/0/jio_vod_img/publisher/Hindi_1591948080060_l_medium.jpg"
  },
  {
    "lang": "English",
    "imageURL": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/550/-/0/jio_vod_img/publisher/English_1591971222673_l_medium.jpg"
  },
  {
    "lang": "Telugu",
    "imageURL": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/550/-/0/jio_vod_img/publisher/Telugu_1598526895030_l_medium.jpg"
  },
  {
    "lang": "Malayalam",
    "imageURL": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/550/-/0/jio_vod_img/publisher/Malayalam_1591948080060_l_medium.jpg"
  },
  {
    "lang": "Kannada", 
    "imageURL": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/330/-/0/jio_vod_img/publisher/Kannada_1591948080060_l_medium.jpg"
  }];
  constructor() { }

  ngOnInit() {
  }

}
