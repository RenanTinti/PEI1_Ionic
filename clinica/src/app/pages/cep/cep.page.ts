import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage {

  cep: string | undefined;

  endereco: any | undefined;

  logradouro: string | undefined;
  bairro: string | undefined;
  cidade: string | undefined;
  estado: string | undefined;

  constructor() { }

  limparFormulario = () => {
    this.endereco = ''
    this.bairro = ''
    this.cidade = ''
    this.estado = ''
  }

  preencherFormulario = (obj: any) => {
    this.endereco = obj.logradouro
    this.bairro = obj.bairro
    this.cidade = obj.localidade
    this.estado = obj.uf
  }

  async callAPI() {
    this.limparFormulario()

    const cep = this.cep
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (this.cep?.length == 8) {
      const dados = await fetch(url)
      const prom = dados.text()

      prom.then((x: any) => {
        let obj = JSON.parse(x)
        this.preencherFormulario(obj)
      })
    } else {
      this.endereco = 'CEP incorreto'
    }
  }
}