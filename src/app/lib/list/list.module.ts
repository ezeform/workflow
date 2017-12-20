import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FabricListComponent],
  exports: [FabricListComponent]
})
export class FabricListModule { }
