import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://http.cat/502'
  image2 = 'https://http.cat/405';
  image3 = 'https://http.cat/403'

  constructor() { }

  ngOnInit() {
  }

}
