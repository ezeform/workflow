import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public itemsNonFocusable: any;
  constructor(public userService: UserService, public route: Router) { 
  this.itemsNonFocusable = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      icon: 'ViewDashboard',
      onClick: () => { this.routeLink('/home') }
    }, {
      key: 'forms', 
      name: 'Forms',
      icon: 'OfficeFormsLogo',
      onClick: () => { this.routeLink('/forms') }
    }, {
      key: 'Report', 
      name: 'Reports',
      icon: 'CRMReport',
      onClick: () => { this.routeLink('/event') }
    }, {
      key: 'settings',
      name: 'Settings',
      icon: 'Settings',
      ariaLabel: 'New. Use left and right arrow keys to navigate',
      onClick: () => { this.routeLink('/home') },
      items: [
        {
          key: 'emailMessage',
          name: 'Email message',
          icon: 'Mail'
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          icon: 'Calendar'
        }
      ]
    }
  ];
  }

  routeLink(url: string){
    this.route.navigateByUrl(url);
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}

export const itemsNonFocusable = [
  {
    key: 'newItem',
    name: 'New',
    icon: 'Add',
    ariaLabel: 'New. Use left and right arrow keys to navigate',
    onClick: () => { return; },
    items: [
      {
        key: 'emailMessage',
        name: 'Email message',
        icon: 'Mail'
      },
      {
        key: 'calendarEvent',
        name: 'Calendar event',
        icon: 'Calendar'
      }
    ]
  },
  {
    key: 'upload',
    name: 'Upload',
    icon: 'Upload',
    onClick: () => { return; },
    ['data-automation-id']: 'uploadNonFocusButton'
  }
];

export const farItemsNonFocusable = [
  {
    key: 'saveStatus',
    name: 'Your page has been saved',
    icon: 'CheckMark',
    ['data-automation-id']: 'saveStatusCheckMark'
  },
  {
    key: 'publish',
    name: 'Publish',
    icon: 'ReadingMode',
    onClick: () => { return; }
  }
];
