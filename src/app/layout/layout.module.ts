import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ NavComponent],
  imports: [
    AppSharedModule,
    CommonModule
  ],
  exports:[ NavComponent]
})
export class LayoutModule { }
