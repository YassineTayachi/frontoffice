import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PlannedTrainingComponent } from './planned-training/planned-training.component';
import { AdmissionComponent } from './admission/admission.component';
import { FeaturedTrainingComponent } from './featured-training/featured-training.component';
import { NewsComponent } from './news/news.component';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContactInfoService } from './services/contact-info.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    PlannedTrainingComponent,
    AdmissionComponent,
    FeaturedTrainingComponent,
    NewsComponent,
    VirtualVisitComponent,
    TestimonyComponent,
    NotFoundComponent,
    ContactComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzd8Cm2cfnSaoZ3s5G2TIUSY5kQWeRdWg'
    }),
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ContactInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
