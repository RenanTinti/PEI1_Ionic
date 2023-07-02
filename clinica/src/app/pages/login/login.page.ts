import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FireserviceService } from 'src/app/services/fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string | undefined;
  senha: string | undefined;
  data: any | undefined;

  constructor(
    private nav: NavController,
    public toastController: ToastController,
    private route: Router,
    public fireService: FireserviceService,
  ) { }

  ngOnInit() {
  }

  async login() {
    try {
      const res: any = await this.fireService.loginWithEmail({ email: this.email, senha: this.senha });
      this.route.navigate(['/home']);
      this.data = this.fireService.simpleQuery(this.email)
      this.presentToast('Logou com sucesso', 'success');
    } catch (error: any) {
      this.presentToast(error, 'danger');
    }
  }

  register() {
    this.route.navigateByUrl('register')
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
