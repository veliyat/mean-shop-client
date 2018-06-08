import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        children: [
            { path: '', component: MainComponent },
            { path: 'shop', component: ShopComponent } 
        ]
    }   
];

export const HomeRoutes = RouterModule.forChild(routes);