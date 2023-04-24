import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formData: FormGroup;
  sent = false;
  submitted = false;
  callbackRequested = false;
  visitorIP = "";

  constructor(private httpClient: HttpClient, private builder: FormBuilder, private contactService: ContactService, private cookieService: CookieService) { }

  ngOnInit() {
    this.callbackRequested = !!this.cookieService.get("RJLCONTACT");
    this.formData = this.builder.group(
        {
          NAME: new FormControl('', [Validators.required]),
          TELEPHONE: new FormControl('', [Validators.required]),
          EMAIL: new FormControl('', [Validators.required, Validators.email]),
          COMMENT: new FormControl('How can we help?'),
          VISITOR_IP: new FormControl(''),
        });
    this.httpClient.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.visitorIP = res.ip;
      this.formData.controls["VISITOR_IP"].setValue(this.visitorIP);
    });
  }

  dimButton() {
    const btn = document.getElementById("rjlRequestContactBtn") as HTMLButtonElement;
    window.setTimeout(() => {
      btn.disabled = true;
    }, 0);
  }

  onSubmit(formData: FormGroup) {
    this.submitted = true;
    if (this.formData.valid) {
      this.dimButton();
        const requestedOn = new Date();
        this.cookieService.set("RJLCONTACT", requestedOn.toString());
        this.contactService.emailMessage(formData).subscribe(response => {
          location.href = 'https://mailthis.to/confirm';
      }, error => {
        console.log(error);
        alert("We apologise, the information could not be sent. Please contact us directly.");
      });
    }
  }

  checkPlaceholder() {
    this.formData.controls["COMMENT"].setValue("");
  }

  enableResend() {
    this.callbackRequested = false;    
    this.cookieService.delete("RJLCONTACT");
  }
}
