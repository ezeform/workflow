import { Component, AfterViewInit, ElementRef, Input, ChangeDetectionStrategy,
  OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { itemsNonFocusable, farItemsNonFocusable } from './data-nonFocusable';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

@Component({
  selector: 'fabric-ui-commandbar',
  template: `
    <div></div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FabricCommandBarComponent implements AfterViewInit, OnChanges {

  @Input()
  public isSearchBoxVisible: boolean;

  @Input()
  public items: any = itemsNonFocusable;

  @Input()
  public farItems: any = farItemsNonFocusable;

  constructor(private hostRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).some((prop) => {
      const change = changes[prop];
      if (!change.isFirstChange() &&
        change.currentValue !== change.previousValue) {
        this.render();
        // We only need to call render once, since that will pick up
        // all changes from the Inputs. This exists the some loop by
        // returning true.
        return true;
      }
    });
  }

  private render() {
    const hostElement = this.hostRef.nativeElement;
    const CommanderBarPage = React.createElement(Fabric, {},
      React.createElement(CommandBar, {
        isSearchBoxVisible: this.isSearchBoxVisible,
        items: this.items,
        farItems: this.farItems
      })
    );
    ReactDOM.render(CommanderBarPage, hostElement);
  }

}
