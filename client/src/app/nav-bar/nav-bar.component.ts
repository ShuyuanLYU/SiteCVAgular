import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private prevScrollpos: number;

  constructor() { }

  ngOnInit(): void {
    this.prevScrollpos = window.pageYOffset;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    // color navbar
    const navbar: HTMLElement = document.querySelector('.navbar');
    navbar.classList.toggle('is-not-transparent', window.scrollY > 100);
    // if hidden navbar

    navbar.classList.toggle('is-hidden', this.prevScrollpos < window.pageYOffset && window.scrollY > 100);
    this.prevScrollpos = window.pageYOffset;

  }

}
