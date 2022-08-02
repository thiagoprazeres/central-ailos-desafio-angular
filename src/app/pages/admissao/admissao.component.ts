import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ColaboradorService } from './../../services/colaborador.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {
  admissaoForm: FormGroup;

  constructor(private colaboradorService: ColaboradorService, private formBuilder: FormBuilder) {
    this.admissaoForm = this.formBuilder.group({
      cpf: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

  get cpf() {
    return this.admissaoForm.get('cpf');
  }

  enviar() {
    console.log(this.admissaoForm.value);
  }

}
