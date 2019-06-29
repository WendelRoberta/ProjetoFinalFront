import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestaqueComponent } from './destaque.component';
import { DestaqueRoutingModule } from './destaque-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DestaqueComponent],
  imports: [
    CommonModule,
    DestaqueRoutingModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DestaqueComponent
  ]
})
export class DestaqueModule { }
