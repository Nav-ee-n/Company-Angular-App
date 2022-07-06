import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyNameComponent } from './company-name/company-name.component';
import { ManagerNameComponent } from './manager-name/manager-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyNameComponent,
    ManagerNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
