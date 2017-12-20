import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricNavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FabricNavBarComponent],
  exports: [FabricNavBarComponent]
})
export class FabricNavBarModule { }