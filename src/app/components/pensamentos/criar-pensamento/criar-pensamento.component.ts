import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    conteudo: '',
    autoria: '',
  };
  constructor() {}

  ngOnInit(): void {}

  salvarPensamento() {
    alert('Pensamento salvo!');
  }
  cancelarPensamento() {
    alert('Pensamento cancelado!');
  }
}
