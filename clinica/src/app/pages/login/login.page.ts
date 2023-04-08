import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email:string | undefined;
  senha:string | undefined;

  constructor(
    private nav: NavController,
    public toastController: ToastController,
    private route: Router,

  ) { }

  ngOnInit() {
  }

  teste = 'teste'

  login(){
    const aux:any = localStorage.getItem('pessoa')
    var lista = JSON.parse(aux)
    if(this.email === lista.email && this.senha === lista.senha){
      this.route.navigateByUrl('home')
      this.presentToast('Login Successful', 'success')
    }else{
      this.presentToast('Wrong Login', 'danger')
    }
  }

  register(){
    this.route.navigateByUrl('register')
  }

  async presentToast(message:string, color:string) {
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
