import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

  callbackRequested = false;
  focus: string | undefined;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.callbackRequested = !!(this.cookieService.get("RJLCONTACT") || (window.sessionStorage.getItem("RJLCONTACT") === 'sent'));
  }

  closeServiceCardHandler(): void {
    this.focus = undefined;
  }

  enableResend() {
    this.callbackRequested = false;    
    this.cookieService.delete("RJLCONTACT");
    window.sessionStorage.removeItem("RJLCONTACT");
  }
  
}
