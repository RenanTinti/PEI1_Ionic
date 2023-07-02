import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/services/fireservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public name: string = '';
  public email: string = '';
  public senha: string = '';
  public cep: string = '';
  public endereco: string = '';
  public logradouro: string = '';
  public bairro: string = '';
  public cidade: string = '';
  public estado: string = '';

  constructor(
    private nav: NavController,
    public toastController: ToastController,
    private route: Router,
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  back() {
    this.nav.navigateBack('login');
  }

  register() {
    this.fireService.signup({
      email: this.email,
      senha: this.senha,
      name: this.name,
      cep: this.cep,
      endereco: this.endereco,
      logradouro: this.logradouro,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
    })
      .then((res: any) => {
        if (res && res.user && res.user.uid) {
          let data = {
            email: this.email,
            senha: this.senha,
            name: this.name,
            cep: this.cep,
            endereco: this.endereco,
            logradouro: this.logradouro,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            uid: res.user.uid
          };
          this.fireService.saveDetails(data)
            .then(() => {
              alert('Conta criada com sucesso!');
              this.route.navigate(['/home']);
            })
            .catch((saveErr: any) => {
              console.log(saveErr);
            });
        }
      })
      .catch((signupErr: any) => {
        alert(signupErr.message);
        console.log(signupErr);
      });
  }

  /*
  register() {
    const aux: any = localStorage.getItem('pessoa')
    var lista = JSON.parse(aux)

    const name = this.name;
    const email = this.email;
    const senha = this.senha;
    const data = { name, email, senha }

    //if(email == lista.email){
    //this.presentToast('Email já existente', 'danger')
    //}else{
    localStorage.setItem('pessoa', JSON.stringify(data))
    this.presentToast('Cadastro feito com sucesso!', 'success')
    this.back()
    //}
  }

  */

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

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      cssClass: 'custom-toast',
      color: color,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel'
        }
      ],
    });

    await toast.present();
  }
}
