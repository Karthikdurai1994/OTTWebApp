import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {
  genre=[{
    "genre": "Family",
    "imageURL": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/1616/1616/1616-h"
  },
  {
    "genre": "Drama",
    "imageURL": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/1617/1617/1617-h"
  },
  {
    "genre": "Action",
    "imageURL": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/6787/6787/6787-h"
  },
  {
    "genre": "Kids",
    "imageURL": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/2687/12687/12687-h"
  },
  {
    "genre": "Sci-Fiction",
    "imageURL": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/6551/6551/6551-h"
  },
  {
    "genre": "Biopic", 
    "imageURL": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/4992/14992/14992-h"
  }];
  constructor() { }

  ngOnInit() {
  }

}
