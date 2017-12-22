import { Component, OnInit } from '@angular/core';
import * as fabric from 'office-ui-fabric-react/lib/Fabric';
import { WindowRef } from '../../services/window-ref';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/lib/jquery.gridster.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private winRef: WindowRef) { 
    /// getting the native window obj
    console.log('Native window obj', winRef.nativeWindow);
  }

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: HomeComponent.itemChange,
      itemResizeCallback: HomeComponent.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

}
