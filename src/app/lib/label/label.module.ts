import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricLabelComponent } from './label.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FabricLabelComponent],
  exports: [FabricLabelComponent]
})
export class FabricLabelModule { }
