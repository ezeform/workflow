import { Component, AfterViewInit, ElementRef, Input, ChangeDetectionStrategy,
  OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

@Component({
  selector: 'fabric-ui-label',
  template: `
    <div></div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FabricLabelComponent implements AfterViewInit, OnChanges {

  @Input()
  public disabled: boolean;

  @Input()
  public required: boolean;

  @Input()
  public content = '';

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
    const LabelPage = React.createElement(Fabric, {},
      React.createElement(Label, {
        disabled: this.disabled,
        required: this.required
      }, this.content)
    );
    ReactDOM.render(LabelPage, hostElement);
  }

}
