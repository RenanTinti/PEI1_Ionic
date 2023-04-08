import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {

  constructor(private nav: NavController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    debugger;
    const aux:any = localStorage.getItem('pacientes')
    
    this.lista = JSON.parse(aux)
  }

  exibeCadastro(){
    this.nav.navigateForward('register-form')
  }

  lista = [
    {name: 'Renan', idade: 23, genero: 'Masculino'},
  ]
}
