import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class FormCadastroPage implements OnInit {

  name = ""
  idade = ""
  genero = ""
  lista = []

  constructor(private nav: NavController) { }

  ngOnInit() {
    const aux:any = localStorage.getItem('pacientes')
    this.lista = aux ? JSON.parse(aux) : [];
  }

  save(){
    const name = this.name;
    const idade = this.idade;
    const genero = this.genero;
    const obj:any = {name, idade, genero}
    const data = JSON.stringify(this.lista.concat(obj))
    this.lista.concat(obj)
    localStorage.setItem('pacientes', data)
    this.nav.navigateBack('pessoa');
}

  back(){
    this.nav.back();
  }

}