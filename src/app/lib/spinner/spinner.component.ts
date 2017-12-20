import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

@Component({
  selector: 'fabric-ui-spinner',
  template: `
    <div></div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FabricSpinnerComponent implements AfterViewInit, OnChanges {

  @Input()
  public label: string;

  @Input()
  public size: SpinnerSize;

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
    const SpinnerPage = React.createElement(Fabric, {},
      React.createElement(Spinner, {
        label: this.label,
        size: this.size,
      })
    );
    ReactDOM.render(SpinnerPage, hostElement);
  }
}
