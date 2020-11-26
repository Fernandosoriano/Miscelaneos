import { Component, OnInit } from '@angular/core';
import { info } from 'console';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  alerta: string = "warning";

  constructor() { }

  ngOnInit(): void {
  }

}
