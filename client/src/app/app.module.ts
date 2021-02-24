import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MailService } from './services/mail.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ArchitectureComponent } from './architecture/architecture.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutMeComponent,
    NavBarComponent,
    MessageComponent,
    NotFoundComponent,
    FooterComponent,
    ArchitectureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent, pathMatch: 'full'},
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
  ])
  ],
  providers: [
    MailService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
