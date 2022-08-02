import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.scss']
})
export class NovaAdmissaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  enviar(cpf: string) {
    console.log('teste: ' + cpf);
  }

}
