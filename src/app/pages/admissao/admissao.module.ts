import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissaoRoutingModule } from './admissao-routing.module';
import { AdmissaoComponent } from './admissao.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdmissaoComponent
  ],
  imports: [
    CommonModule,
    AdmissaoRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdmissaoModule { }
