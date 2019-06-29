import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento.component';
import { FormsModule } from '@angular/forms';
import { AgendamentoRoutingModule } from './agendamento-routing.module';


@NgModule({
  declarations: [AgendamentoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgendamentoRoutingModule
  ],
  exports: [
    CommonModule,
    AgendamentoComponent
  ]
})
export class AgendamentoModule { }
