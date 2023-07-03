import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CookieService } from 'src/app/services/cookie.service';
import { FireserviceService } from 'src/app/services/fireservice.service';
import { LocalidadeService } from 'src/app/services/localidade.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.page.html',
  styleUrls: ['./scheduling.page.scss'],
})
export class schedulingPage {
  localidades: any = [];
  examType = ""
  date = ""
  unidade = "";
  schedules = []
  cookies: any;
  uid: string = '';


  constructor(
    private nav: NavController,
    public toastController: ToastController,
    private cookieService: CookieService,
    public fireService: FireserviceService,
    private localidadeService: LocalidadeService,
  ) { }

  ionViewWillEnter() {
    this.cookies = this.cookieService.getCookie("dados");
    this.localidadeService.getLocalidades(this.cookies)
      .then((localidades) => {
        this.localidades = localidades;
      })
    this.cookies = this.cookies.split(',');
    this.uid = this.cookies[2];
  }

  back() {
    this.nav.navigateBack('home');
  }

  save() {
    const examType = this.examType;
    const date = this.date;
    const unidade = this.unidade;
    const user_uid = this.uid;
    this.fireService.saveScheduling(examType, date, unidade, user_uid)
    this.nav.navigateBack('home');
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