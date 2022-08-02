import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaAdmissaoComponent } from './nova-admissao.component';

const routes: Routes = [{ path: '', component: NovaAdmissaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovaAdmissaoRoutingModule { }
