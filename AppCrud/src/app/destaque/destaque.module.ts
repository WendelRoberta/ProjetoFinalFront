import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestaqueComponent } from './destaque.component';
import { DestaqueRoutingModule } from './destaque-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule, FooterModule } from '../shared';

@NgModule({
  declarations: [DestaqueComponent],
  imports: [
    CommonModule,
    DestaqueRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class DestaqueModule { }
