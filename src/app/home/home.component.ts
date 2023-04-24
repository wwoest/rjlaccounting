import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {  

  carouselImages: string[] = [
    "/assets/images/carousel/carousel1.png",
    "/assets/images/carousel/carousel2.png",
    "/assets/images/carousel/carousel3.png"
  ]

  constructor(private router: Router, private cookieService: CookieService){}

  ngOnInit() {
    if (!!this.cookieService.get("RJLCONTACT")) {
      window.setTimeout(() => {
        document.querySelector("#page-bottom")?.scrollIntoView();
      }, 300);
    }
  }

  ngOnDestroy() {
    this.cookieService.delete("RJLCONTACT");
  }
  
  goto(url: string){
      this.router.navigateByUrl(url);
  }

}
