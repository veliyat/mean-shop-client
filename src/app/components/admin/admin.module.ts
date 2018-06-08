import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutes } from './admin.routes';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes
  ],
  declarations: [
    DashboardComponent,
    AdminComponent
  ]
})
export class AdminModule { }
