import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulings',
  templateUrl: './schedulings.component.html',
  styleUrls: ['./schedulings.component.scss'],
})
export class SchedulingsComponent implements OnInit {
  @Input() exame: string = '';
  @Input() data: string = '';
  @Input() local: string = '';

  constructor() { }

  ngOnInit() { }

}
