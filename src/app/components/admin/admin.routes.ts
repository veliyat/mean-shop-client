import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { 
        path: 'admin', 
        component: AdminComponent,
        children: [
            { path: '', component: DashboardComponent }
        ]
    }   
];

export const AdminRoutes = RouterModule.forChild(routes);