import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsComponent } from './assignments/assignments.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { MatchReportsComponent } from './match-reports/match-reports.component';
import { OfficersComponent } from './officers/officers.component';
import { ResourcesComponent } from './resources/resources.component';
import { SocietyInformationComponent } from './society-information/society-information.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'match-reports', component: MatchReportsComponent },
  { path: 'officers', component: OfficersComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'society-information', component: SocietyInformationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
