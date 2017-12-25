import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { WindowRef } from '../../../services/window-ref';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public itemsNonFocusable: any;
  public global: any;
  constructor(public userService: UserService, public route: Router, public window: WindowRef) { 
    this.global = window.nativeWindow;
  
  }

  routeLink(url: string){
    this.route.navigateByUrl(url);
  }

  ngOnInit() {
    var CommandBarElements = document.querySelectorAll(".ms-CommandBar");
    for (var i = 0; i < CommandBarElements.length; i++) {
      new this.global.fabric['CommandBar'](CommandBarElements[i]);
    }
  }

  logout() {
    this.userService.logout();
  }

}
