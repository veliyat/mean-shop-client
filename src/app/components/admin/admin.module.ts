import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminRoutes } from './admin.routes';
import { AdminMatModule } from './adminmat.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AdminRoutes,
    AdminMatModule
  ],
  declarations: [
    DashboardComponent,
    AdminComponent,
    NavComponent    
  ]
})
export class AdminModule { }
