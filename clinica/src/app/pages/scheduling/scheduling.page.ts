import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.page.html',
  styleUrls: ['./scheduling.page.scss'],
})
export class schedulingPage implements OnInit {

  examType = ""
  date = ""
  schedules = []


  constructor(
  private nav: NavController,
  public toastController: ToastController,
  ) { }

  back(){
    this.nav.navigateBack('home');
  }

  ngOnInit() {
    const aux:any = localStorage.getItem('schedulings')
    this.schedules = aux ? JSON.parse(aux) : [];
  }

  save(){
    const examType = this.examType;
    const date = this.date;
    const obj:any = {examType, date}
    const data = JSON.stringify(this.schedules.concat(obj))
    this.schedules.concat(obj)
    localStorage.setItem('schedulings', data)
    this.nav.navigateBack('home');
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