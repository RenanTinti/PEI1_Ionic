import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CookieService } from 'src/app/services/cookie.service';
import { FireserviceService } from 'src/app/services/fireservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cookies: any;
  name: string = '';
  uid: string = '';
  listscheduling: any;

  constructor(
    private nav: NavController,
    private cookieService: CookieService,
    public fireService: FireserviceService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cookies = this.cookieService.getCookie("dados");
    this.cookies = this.cookies.split(',');
    this.name = this.cookies[0];
    this.uid = this.cookies[2];
    this.fireService.getSchedulings(this.uid)
      .then(schedulings => {
        this.listscheduling = schedulings;
      })
      .catch(error => {
        console.error(error);
      });
  }

  back() {
    this.nav.back();
  }
}
