import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})

export class CookieComponent implements OnInit {

  showCookieDrawer = false;

  ngOnInit() {
    if (!document.cookie?.includes("RJLCOOKIEACCEPT")) {
      window.setTimeout(() => {
        this.showCookieDrawer = true;
      }, 50);
    }  
  }

  acceptCookies() {
    this.showCookieDrawer = true;
    const cookieAccepted = new Date();
    document.cookie = `RJLCOOKIEACCEPT=${cookieAccepted.toString}`;
  }

}
