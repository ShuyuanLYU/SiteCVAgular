import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ProfessionalExperienceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MailService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
