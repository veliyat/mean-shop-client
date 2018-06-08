import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterForRoot } from './app.routes';
import { HomeModule } from './components/home/home.module';
import { AdminModule } from './components/admin/admin.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AdminModule,
    RouterForRoot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }