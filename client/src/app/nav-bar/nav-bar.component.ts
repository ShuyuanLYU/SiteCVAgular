import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private prevScrollpos: number = window.pageYOffset;
  isHidden = false;
  fontColor = '#fafafa';
  backgroundColor = 'transparent';

  constructor() { }

  ngOnInit(): void {
    this.setIsHiddenNavBar();
    this.setFontColor();
    this.setBackgroundColor();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {

    this.setIsHiddenNavBar();
    this.setFontColor();
    this.setBackgroundColor();
  }

  private setFontColor(): void{
    this.fontColor = window.pageYOffset > 100 ? '#333333' : '#fafafa';
  }

  private setIsHiddenNavBar(): void{
    this.isHidden = this.prevScrollpos <= window.pageYOffset && window.scrollY > 100;
    this.prevScrollpos = window.pageYOffset;
  }

  private setBackgroundColor(): void {
    this.backgroundColor =  window.scrollY > 100 ? '#fafafa' : 'transparent';
  }

}
