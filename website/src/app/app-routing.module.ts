import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { paths, path } from './app-paths';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FeesComponent } from './fees/fees.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { MatchReportsComponent } from './match-reports/match-reports.component';
import { OfficersComponent } from './officers/officers.component';
import { ClubResourcesComponent } from './club-resources/club-resources.component';
import { SocietyInformationComponent } from './society-information/society-information.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RefereeResourcesComponent } from './referee-resources/referee-resources.component';
import { InterestedComponent } from './interested/interested.component';

export const routes: Routes = [
  { path: paths.home, component: HomeComponent },
  { path: paths.assignments, component: AssignmentsComponent },
  { path: paths.fees, component: FeesComponent },
  { path: paths.directory, component: DirectoryComponent },
  //{ path: paths.matchReports, component: MatchReportsComponent },
  { path: paths.officers, component: OfficersComponent },
  { path: paths.refereeResources, component: RefereeResourcesComponent },
  { path: paths.clubResources, component: ClubResourcesComponent },
  //{ path: paths.societyInformation, component: SocietyInformationComponent },
  { path: paths.interested, component: InterestedComponent },
  { path: paths.refereeRugby, redirectTo: path(paths.interested), pathMatch: 'full' },
  { path: paths.joinUs, redirectTo: path(paths.interested), pathMatch: 'full' },
  { path: paths.empty, redirectTo: path(paths.home), pathMatch: 'full' },
  // TODO: smart 404? https://medium.com/angular-in-depth/angular-smart-404-page-85a45b109fd8
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
