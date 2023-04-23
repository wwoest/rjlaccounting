import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../shared/contact.service';

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

  constructor(private builder: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.formData = this.builder.group(
      {
        fullNameControl: new FormControl('', [Validators.required]),
        telControl: new FormControl('', [Validators.required]),
        emailControl: new FormControl('', [Validators.required, Validators.email]),
        commentControl: new FormControl('How can we help?')
      });

    if (document.cookie?.includes("RJLCONTACT")) {
      this.callbackRequested = true;
    }  
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
        document.cookie = `RJLCONTACT=${requestedOn.toString()}`;
        this.contactService.emailMessage(formData).subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
      }, error => {
        console.log(error);
        alert("We apologise, the information could not be sent. Please contact us directly.");
      });
    }
  }

  checkPlaceholder() {
    this.formData.controls["commentControl"].setValue("");
  }

  enableResend() {
    this.callbackRequested = false;    
    document.cookie = "RJLCONTACT=;expires=Thu,01 Jan 1970 00:00:00 UTC;";
  }
}
