import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsComponent
  ],
  declarations: [FormsComponent],
  exports: [FormsComponent]
})
export class FormsModule { }
