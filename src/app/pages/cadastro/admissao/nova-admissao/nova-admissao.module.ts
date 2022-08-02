import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaAdmissaoRoutingModule } from './nova-admissao-routing.module';
import { NovaAdmissaoComponent } from './nova-admissao.component';


@NgModule({
  declarations: [
    NovaAdmissaoComponent
  ],
  imports: [
    CommonModule,
    NovaAdmissaoRoutingModule
  ]
})
export class NovaAdmissaoModule { }
