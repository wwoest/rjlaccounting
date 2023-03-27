import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public myAngularxQrCode = "http://www.rjlaccounting.co.za/e-card.pdf";
  
  ngOnInit() {
    document.body.classList.add("home-bg");
  }

  ngOnDestroy() {
    document.body.classList.remove("home-bg");
  }

}
