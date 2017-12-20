import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCommandBarComponent } from './commandbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FabricCommandBarComponent],
  exports: [FabricCommandBarComponent]
})
export class FabricCommandBarModule { }
