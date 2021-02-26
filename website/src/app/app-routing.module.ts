import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { paths, path } from './app-paths';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FeesComponent } from './fees/fees.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { MatchReportsComponent } from './match-reports/match-reports.component';
import { OfficersComponent } from './officers/officers.component';
import { ResourcesComponent } from './resources/resources.component';
import { SocietyInformationComponent } from './society-information/society-information.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: paths.home, component: HomeComponent },
  { path: paths.assignments, component: AssignmentsComponent },
  { path: paths.fees, component: FeesComponent },
  { path: paths.directory, component: DirectoryComponent },
  { path: paths.matchReports, component: MatchReportsComponent },
  { path: paths.officers, component: OfficersComponent },
  { path: paths.resources, component: ResourcesComponent },
  { path: paths.societyInformation, component: SocietyInformationComponent },
  { path: paths.empty, redirectTo: path(paths.home), pathMatch: 'full' },
  // TODO: smart 404? https://medium.com/angular-in-depth/angular-smart-404-page-85a45b109fd8
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
