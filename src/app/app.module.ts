import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './modules/core/shared/components/main-layout/main-layout.component';
import { MainFooterComponent } from './modules/core/shared/components/main-footer/main-footer.component';
import { MainNavbarComponent } from './modules/core/shared/components/main-navbar/main-navbar.component';
import { ComingSoonComponent } from './modules/core/shared/components/coming-soon/coming-soon.component';
import { NotificationFormComponent } from './modules/core/shared/components/notification-form/notification-form.component';
import { CopyrightComponent } from './modules/core/shared/components/copyright/copyright.component';
import {CoreModule} from "./modules/core/core.module";
import {NgsRevealModule} from "ngx-scrollreveal";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainFooterComponent,
    MainNavbarComponent,
    ComingSoonComponent,
    NotificationFormComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
