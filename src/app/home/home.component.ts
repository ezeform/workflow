import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../services/window-ref';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  global: any;
  constructor(private window: WindowRef) { 
    this.global = window.nativeWindow;
  }

  ngOnInit() {
    var PivotElements = document.querySelectorAll(".ms-Pivot");
    for (var i = 0; i < PivotElements.length; i++) {
      new this.global.fabric['Pivot'](PivotElements[i]);
    }
  }
}
