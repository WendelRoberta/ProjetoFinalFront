import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcamentoComponent } from './orcamento.component';

const routes: Routes = [
  { path: '', component: OrcamentoComponent,


}
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class OrcamentoRoutingModule { }
