import { Component } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { LocalidadeService } from 'src/app/services/localidade.service';

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
    private cookieService: CookieService,
    private localidadeService: LocalidadeService,
  ) { }

  ionViewWillEnter() {
    this.cookies = this.cookieService.getCookie("dados");
    this.localidadeService.getLocalidades(this.cookies)
      .then((localidades) => {
        this.localidades = localidades;
      })
  }
}