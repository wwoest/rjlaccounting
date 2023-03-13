import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdModule } from './md.module';
import { ArticlesComponent } from './articles/articles.component';
import { DatesComponent } from './dates/dates.component';
import { EventsComponent } from './events/events.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSheetComponent } from './contact-sheet/contact-sheet.component';
import { SliderComponent } from './slider/slider.component';
import { PartnersComponent } from './partners/partners.component';
import { TermsComponent } from './terms/terms.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './qr/qr.component';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './faq/faq.component';
import { ScriptService } from './shared/services/script.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    ArticlesComponent,
    DatesComponent,
    EventsComponent,
    CustomersComponent,
    ContactComponent,
    HomeComponent,
    ContactSheetComponent,
    SliderComponent,
    PartnersComponent,
    TermsComponent,
    QrComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    MdModule,
    BrowserAnimationsModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
