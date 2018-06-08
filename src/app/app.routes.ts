import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/components/home/home.module#HomeModule' },
  { path: 'admin', loadChildren: 'app/components/admin/admin.module#AdminModule' }  
];

export const RouterForRoot = RouterModule.forRoot(routes);



