import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'RJL Accounting (Pty) Ltd';

  showBorder = false;
  
  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.showBorder = !!this.cookieService.get("RJLCOOKIEACCEPT");
  }

  openWhatsApp(): void {
     const whatsAppElement = window.document.getElementsByClassName("ngx-whatsapp-button-float");

    if (whatsAppElement && whatsAppElement.length > 0) {
      window.setTimeout(() => {
        (whatsAppElement[0] as any).click();
      }, 10);
    }
  }

}
