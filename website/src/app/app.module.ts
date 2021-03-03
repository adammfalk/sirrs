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

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ResourcesComponent } from './resources/resources.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { OfficersComponent } from './officers/officers.component';
import { SocietyInformationComponent } from './society-information/society-information.component';
import { DirectoryComponent } from './directory/directory.component';
import { MatchReportsComponent } from './match-reports/match-reports.component';
import { FeesComponent } from './fees/fees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    ResourcesComponent,
    AssignmentsComponent,
    OfficersComponent,
    SocietyInformationComponent,
    DirectoryComponent,
    MatchReportsComponent,
    FeesComponent,
    NotFoundComponent,
    CovidInfoComponent
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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
