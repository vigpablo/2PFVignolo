import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { TablasModule } from '../dashboard/pages/tablas/tablas.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list'; 

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TablasModule,
    DirectivesModule,
    CursosModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
