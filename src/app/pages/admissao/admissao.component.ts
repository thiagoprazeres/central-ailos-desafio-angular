import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ColaboradorService } from './../../services/colaborador.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {
  admissaoForm: FormGroup;
  situacaoCpf: any;
  submitted = false;

  constructor(private colaboradorService: ColaboradorService, private formBuilder: FormBuilder) {
    this.admissaoForm = this.formBuilder.group({
      cpf: ['', Validators.compose([Validators.required, AdmissaoComponent.ValidaCpf])]
    });
  }

  ngOnInit(): void {
  }

  get cpf() {
    return this.admissaoForm.get('cpf');
  }

  enviar() {
    console.log(this.admissaoForm.value);
    if(this.admissaoForm.value.cpf === '11122233344'){
      this.situacaoCpf = {
        nome: 'Mariane de Sousa Oliveira',
        status: true
      }
    } else {
      this.situacaoCpf = null;
      this.submitted = true;
    }
  }

  static ValidaCpf(controle: AbstractControl) {
    const cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) return null;

    return { cpfInvalido: true };
  }

}
