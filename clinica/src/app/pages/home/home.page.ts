import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const aux: any = localStorage.getItem('schedulings')
    this.listscheduling = JSON.parse(aux)
  }

  back() {
    this.nav.back();
  }

  listscheduling = [
    { examType: '', date: '' },
  ]
}
