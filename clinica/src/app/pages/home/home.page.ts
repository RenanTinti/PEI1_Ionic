import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CookieService } from 'src/app/services/cookie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cookies: any;
  name: string = '';
  uid: string = '';

  constructor(
    private nav: NavController,
    private cookieService: CookieService,

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cookies = this.cookieService.getCookie("dados");
    this.cookies = this.cookies.split(',');
    this.name = this.cookies[0];
    this.uid = this.cookies[2];
    const aux: any = localStorage.getItem('schedulings');
    this.listscheduling = JSON.parse(aux);
  }

  back() {
    this.nav.back();
  }

  listscheduling = [
    { examType: '', date: '' },
  ]
}
