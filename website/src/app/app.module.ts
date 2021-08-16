import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { OfficersComponent } from './officers/officers.component';
import { SocietyInformationComponent } from './society-information/society-information.component';
import { DirectoryComponent } from './directory/directory.component';
import { MatchReportsComponent } from './match-reports/match-reports.component';
import { FeesComponent } from './fees/fees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { RefereeResourcesComponent } from './referee-resources/referee-resources.component';
import { ClubResourcesComponent } from './club-resources/club-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    AssignmentsComponent,
    OfficersComponent,
    SocietyInformationComponent,
    DirectoryComponent,
    MatchReportsComponent,
    FeesComponent,
    NotFoundComponent,
    CovidInfoComponent,
    RefereeResourcesComponent,
    ClubResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '143887419517-ipum49viv2m18fbh52ioes63e4vd5g59.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
