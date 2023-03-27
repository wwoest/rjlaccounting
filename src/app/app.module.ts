import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { FaqComponent } from './faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";
import { QRCodeModule } from 'angularx-qrcode';
import { EcardComponent } from './ecard/ecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ResourcesComponent,
    FaqComponent,
    FooterComponent,
    TermsComponent,
    ContactFormComponent,
    ContactComponent,
    AboutComponent,
    EcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgbModule,
    NgxWhastappButtonModule,
    QRCodeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
