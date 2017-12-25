import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
