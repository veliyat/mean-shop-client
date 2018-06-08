import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutes } from './home.routes';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './shared/nav/nav.component';
import { LoginModalComponent } from './shared/login-modal/login-modal.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ShopComponent,
        MainComponent,
        NavComponent,
        LoginModalComponent,
        TopbarComponent
    ],
    imports: [
        CommonModule,
        HomeRoutes
    ],    
    providers: []    
  })
  export class HomeModule { }