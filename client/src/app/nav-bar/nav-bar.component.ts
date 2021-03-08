import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private prevScrollpos: number = window.pageYOffset;
  isHidden = false;
  collapse = true;
  public links: Link[];

  constructor() {
    this.links = [
      new Link('banner', 'Accueil'),
      new Link('aboutme', 'Profil'),
      new Link('exp', 'Expériences'),
      new Link('formation', 'Formation'),
      new Link('contact', 'Me contacter')
  ];
   }

  ngOnInit(): void {
    this.setIsHiddenNavBar();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.setIsHiddenNavBar();
  }

  private setIsHiddenNavBar(): void{
    this.isHidden = this.prevScrollpos <= window.pageYOffset && window.scrollY > 100;
    this.prevScrollpos = window.pageYOffset;
  }

}
class Link {
  public sectionId: string;
  public label: string;

  constructor(sectionId: string, label: string) {
      this.sectionId = sectionId;
      this.label = label;
  }
}
