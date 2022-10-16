import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './shared/components/slide/slide.component';
import { SubscribeSectionComponent } from './shared/components/subscribe-section/subscribe-section.component';

@NgModule({
  declarations: [
    SlideComponent,
    SubscribeSectionComponent
  ],
  exports: [
    SubscribeSectionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
