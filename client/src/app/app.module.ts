import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MailService } from './services/mail.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { HomeComponent } from './home/home.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { FormationComponent } from './formation/formation.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { TimelineAlternanceM2Component } from './timeline-alternance-m2/timeline-alternance-m2.component';
import { TimelineStageM1Component } from './timeline-stage-m1/timeline-stage-m1.component';
import { TimelineProjetTutoreComponent } from './timeline-projet-tutore/timeline-projet-tutore.component';
import { CvPdfComponent } from './cv-pdf/cv-pdf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'architecteur', component: ArchitectureComponent},
  {path: 'message', component: MessageComponent},
  {path: 'sendMail', component: SendMailComponent},

  {path: '**', redirectTo: '/404'}
];
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutMeComponent,
    NavBarComponent,
    MessageComponent,
    NotFoundComponent,
    FooterComponent,
    ArchitectureComponent,
    HomeComponent,
    NewMessageComponent,
    SendMailComponent,
    FormationComponent,
    ProfessionalExperienceComponent,
    TimelineAlternanceM2Component,
    TimelineStageM1Component,
    TimelineProjetTutoreComponent,
    CvPdfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    PdfViewerModule,
    NgbModule
  ],
  providers: [
    MailService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
