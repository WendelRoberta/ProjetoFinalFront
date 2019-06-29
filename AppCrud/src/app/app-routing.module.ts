import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'destaque', loadChildren: './destaque/destaque.module#DestaqueModule'},
  { path: 'orcamento', loadChildren: './orcamento/orcamento.module#OrcamentoModule'},
  { path: 'agendamento', loadChildren: './agendamento/agendamento.module#AgendamentoModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
