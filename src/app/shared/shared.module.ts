import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

/* Modules */
import { AppMaterialModule } from './material/material.module';
import { AppPrimeNgModule } from './primeng/primeng-module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

/* Pipes */
import { FriendlyTitlePipe } from './pipes/friendly-title.pipe';

@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    AppMaterialModule,
    NgBootstrapModule,
    ReactiveFormsModule
  ],
  exports: [
    AppPrimeNgModule,
    AppMaterialModule,
    NgBootstrapModule,
    SearchComponent,
    LoaderComponent,
    FriendlyTitlePipe
  ],
  declarations: [
    SearchComponent,
    LoaderComponent,
    FriendlyTitlePipe]
})
export class AppSharedModule { }