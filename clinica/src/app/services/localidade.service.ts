import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {
  localidades: any[] = [];

  constructor(
    //private http: HttpClient,

  ) { }

  async getLocalidades(cookies: any) {
    cookies = cookies.split(",");
    const uf = cookies[1];
    const options = {
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios",
    };
    const response = await CapacitorHttp.get(options);
    return response.data
  }
}
