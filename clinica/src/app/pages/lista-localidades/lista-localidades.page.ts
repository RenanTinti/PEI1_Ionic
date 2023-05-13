import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-localidades.page.html',
  styleUrls: ['./lista-localidades.page.scss'],
})
export class ListaLocalidadesPage {
  url = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome"
  localidades: any = []

  constructor(private http: HttpClient) { }

  ionViewWillEnter() {
    this.http.get(this.url).subscribe(localidades => {
      this.localidades = localidades
    })
  }

}