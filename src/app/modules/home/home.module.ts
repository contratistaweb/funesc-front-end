import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import {CoreModule} from "../core/core.module";
import { MainSectionComponent } from './components/main-section/main-section.component';
import {NgsRevealModule} from "ngx-scrollreveal";

@NgModule({
  declarations: [
    HomeLayoutComponent,
    MainSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    NgsRevealModule
  ]
})
export class HomeModule { }
