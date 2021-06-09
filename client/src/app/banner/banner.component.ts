import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.setBannerBackground();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.setBannerBackground();
  }


  /* @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    const banner: HTMLElement = document.getElementById('banner');
    banner.style.backgroundSize = 150 - +window.pageYOffset / 15 + '%';
    banner.style.opacity = 1 - +window.pageYOffset / 700 + '';
  } */

  /**
   * setBannerBackground
   */
  public setBannerBackground(): void {
    const banner: HTMLElement = document.getElementById('banner');
    banner.style.background = this.setBannerImg();
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundRepeat = 'no-repeat';
    banner.style.backgroundPosition = 'center';
    banner.style.backgroundAttachment = 'fixed';
  }

  private setBannerImg(): string {
    const widthToHeight = window.innerWidth / window.innerHeight;
    if (widthToHeight >= 10 / 8) {
      console.log("0");
      return 'url("/assets/image/banner/background_0.jpg")';
    } else if (widthToHeight >= 1){
      console.log("1");
      return 'url("/assets/image/banner/background_1.jpg")';
    }else if (widthToHeight >= 8 / 10){
      console.log("2");
      return 'url("/assets/image/banner/background_2.jpg")';
    }else if (widthToHeight >= 5 / 7){
      console.log("3");
      return 'url("/assets/image/banner/background_3.jpg")';
    }else if (widthToHeight >= 9 / 16){
      console.log("4");
      return 'url("/assets/image/banner/background_4.jpg")';
    }else {
      console.log("5");
      return 'url("/assets/image/banner/background_5.jpg")';
    }
  } 

}
