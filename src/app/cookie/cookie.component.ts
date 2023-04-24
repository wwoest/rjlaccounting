import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})

export class CookieComponent implements OnInit {

  showCookieDrawer = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.showCookieDrawer = !this.cookieService.get("RJLCOOKIEACCEPT");
  }

  acceptCookies() {
    this.showCookieDrawer = true;
    const cookieAccepted = new Date();
    this.cookieService.set('RJLCOOKIEACCEPT', cookieAccepted.toString());
  }

}
