import { Component, AfterViewInit, ElementRef, Input, ChangeDetectionStrategy,
    OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
  import { getRTL } from 'office-ui-fabric-react/lib/Utilities';
  import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
  import { TextField } from 'office-ui-fabric-react/lib/TextField';
  import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
  import { Icon } from 'office-ui-fabric-react/lib/Icon';
  import { List } from 'office-ui-fabric-react/lib/List';
  
  
  @Component({
    selector: 'fabric-ui-label',
    template: `
      <div></div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  })
  export class FabricListComponent implements AfterViewInit, OnChanges {
  
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
        React.createElement(FocusZone, { }, 
          React.createElement(TextField, { }),
          React.createElement(List, { }) 
      )
      );
      ReactDOM.render(LabelPage, hostElement);
    }

  
  }
  