import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 ngOnInit(): void {}

  public contact_name = "";
  public contact_number = "";
  public contact_email = "";

  submitted = false;

  onSubmit() { this.submitted = true; }

  requestCallMe(): void {
    this.submitted = true;
  }

}
