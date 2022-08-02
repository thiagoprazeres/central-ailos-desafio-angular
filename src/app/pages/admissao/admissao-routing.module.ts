import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoComponent } from './admissao.component';

const routes: Routes = [{ path: '', component: AdmissaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissaoRoutingModule { }
