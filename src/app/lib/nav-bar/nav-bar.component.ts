import { Component, AfterViewInit, ElementRef, Input, ChangeDetectionStrategy,
    OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
  import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
  
  @Component({
    selector: 'fabric-ui-navbar',
    template: `
      <div className='ms-NavExample-LeftPane'></div>
    `,
    styles: ['./nav-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  })
  export class FabricNavBarComponent implements AfterViewInit, OnChanges {
  
    @Input()
    public expandedStateText: string = 'expanded';
  
    @Input()
    public collapsedStateText: string = 'collapsed';

    @Input()
    public selectedKey: string = 'key3';

    @Input()
    public groups: any = [
        {
          links:
          [
            {
              name: 'Home',
              url: 'http://example.com',
              links: [{
                name: 'Activity',
                url: 'http://msn.com',
                key: 'key1'
              },
              {
                name: 'News',
                url: 'http://msn.com',
                key: 'key2'
              }],
              isExpanded: true
            },
            { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
            { name: 'Pages', url: 'http://msn.com', key: 'key4' },
            { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
            { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
            {
              name: 'Edit',
              onClick: this._onClickHandler2,
              icon: 'Edit',
              key: 'key8'
            }
          ]
        }
      ]
  
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
        React.createElement(Nav, {
            groups: this.groups,
            expandedStateText: this.expandedStateText,
            collapsedStateText: this.collapsedStateText,
            selectedKey: this.selectedKey
        })
      );
      ReactDOM.render(CommanderBarPage, hostElement);
    }
  
    _onClickHandler2(){
        console.log('_onClickHandler2 ... fire!');
    }
  }
  