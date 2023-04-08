import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {  

  carouselImages: string[] = [
    "/assets/images/carousel/carousel1.png",
    "/assets/images/carousel/carousel2.png",
    "/assets/images/carousel/carousel3.png"
  ]

  constructor(private router: Router){}

  goto(url: string){
      this.router.navigateByUrl(url);
  }

}
