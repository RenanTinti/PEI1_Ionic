import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public name: string = '';
  public email: string = '';
  public senha: string = '';
  
  constructor(
    private nav: NavController,
    public toastController: ToastController,
    ) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('login');
  }

  send(){
    const aux:any = localStorage.getItem('pessoa')
    var lista = JSON.parse(aux)

    const name = this.name;
    const email = this.email;
    const senha = this.senha;
    const data = {name, email, senha}

    //if(email == lista.email){
      //this.presentToast('Email já existente', 'danger')
    //}else{
      localStorage.setItem('pessoa', JSON.stringify(data))
      this.presentToast('Cadastro feito com sucesso!', 'success')
      this.back()
    //}
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
