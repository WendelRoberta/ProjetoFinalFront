import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestaqueComponent } from './destaque.component';

const routes: Routes = [
  { path: '', component: DestaqueComponent,


}
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class DestaqueRoutingModule { }
