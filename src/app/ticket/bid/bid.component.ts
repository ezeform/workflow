///<reference path='../../../../node_modules/@angular/router/src/shared.d.ts'/>
import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../shared/ticket.service';
import {TicketModel} from '../../shared/ticket-model';
import {UserService} from '../../shared/user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  ticket: TicketModel;
  isLoggedIn$: Observable<boolean>;
  progressRefreshTicket = false;

  constructor(private ticketService: TicketService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {

    this.isLoggedIn$ = userService.isLoggedIn$;

    // this.userService.isLoggedIn$.subscribe(
    //   isLoggedIn => this.isLoggedIn = this.isLoggedIn
    // );

    // this.isLoggedIn = true; // userService.isLoggedin$;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.refreshTicket(params.get('id'));
      }
    );
  }

  onRefreshTicket() {
    this.refreshTicket(this.ticket.id);
  }

  private refreshTicket(id: string | null) {
    this.progressRefreshTicket = true;
    const handle404 = () => {
      this.router.navigate(['404']);
      this.ticketService.getOne(id).subscribe(
        ticket => {
          this.progressRefreshTicket = false;
          if (ticket == null) {
            handle404();
          } else {
            this.ticket = ticket;
          }
        },
        err => {
          return handle404();
        }
      );
    }
  }
}
