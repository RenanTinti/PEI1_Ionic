import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-localidades.page.html',
  styleUrls: ['./lista-localidades.page.scss'],
})
export class ListaLocalidadesPage {
  cookies: any;
  uf: any;
  url: any;
  localidades: any = [];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  ionViewWillEnter() {
    this.cookies = this.cookieService.getCookie("dados");
    this.cookies = this.cookies.split(",");
    this.uf = this.cookies[1];
    this.url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + this.uf + "/municipios";
    this.http.get<any[]>(this.url).subscribe((data) => {
      this.localidades = data;
    });
  }

}