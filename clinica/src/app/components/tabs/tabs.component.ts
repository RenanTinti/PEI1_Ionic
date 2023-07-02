import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  listaAgendamentos() {
    this.router.navigate(['/home']);
  }

  listaLocalidades() {
    this.router.navigate(['/lista-localidades']);
  }

  marcarConsulta() {
    this.router.navigate(['/scheduling']);
  }
}