import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'central-ailos';
  enviar(cpf: string) {
    console.log('teste: ' + cpf);
  }
}
