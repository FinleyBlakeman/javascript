import {Component, OnInit} from '@angular/core';

export interface GalleryImage {
  seedNumber: number,
  lockImage: boolean
}

@Component({
  selector: 'app-circular-image-gallery',
  templateUrl: './circular-image-gallery.component.html',
  styleUrls: ['./circular-image-gallery.component.scss']
})
export class CircularImageGalleryComponent implements OnInit {
  images: GalleryImage[] = [];
  lockedImages: GalleryImage[] = [];

  ngOnInit() {
    this.images = [
      {seedNumber: 1, lockImage: false},
      {seedNumber: 2, lockImage: false},
      {seedNumber: 3, lockImage: false},
      {seedNumber: 4, lockImage: false},
      {seedNumber: 5, lockImage: false},
      {seedNumber: 6, lockImage: false},
      {seedNumber: 7, lockImage: false},
      {seedNumber: 8, lockImage: false},
      {seedNumber: 9, lockImage: false},
      {seedNumber: 10, lockImage: false},
      {seedNumber: 11, lockImage: false},
      {seedNumber: 12, lockImage: false}
    ];

    this.setLockedImages();
  }

  public getNewImages = () => {
    this.images.forEach(image => {
      if(!image.lockImage){
        image.seedNumber = Math.random();
      }
    });
  };

  public lockImage = (index: number) => {
    this.images[index].lockImage = !this.images[index].lockImage;
    this.setLockedImages();
  }

  private setLockedImages = () => {
    this.lockedImages = this.images.filter(image => image.lockImage);
  }
}
