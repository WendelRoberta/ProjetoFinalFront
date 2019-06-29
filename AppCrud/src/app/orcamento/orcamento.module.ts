import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento.component';
import { FormsModule } from '@angular/forms';
import { OrcamentoRoutingModule } from './orcamento-routing.module';


@NgModule({
  declarations: [OrcamentoComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrcamentoRoutingModule
  ],
  exports: [
    CommonModule,
    OrcamentoComponent
  ]
})
export class OrcamentoModule { }
