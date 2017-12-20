///<reference path="bid.validators.ts"/>
///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TicketModel} from '../../shared/ticket-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BidService} from '../../shared/bid.service';
import {bidMinimumValidator} from './bid.validators';


@Component({
  selector: 'app-ticket-bid-form',
  templateUrl: './ticket-bid-form.component.html',
  styleUrls: ['./ticket-bid-form.component.css']
})

export class TicketBidFormComponent implements OnInit, OnChanges {
  @Input() ticket: TicketModel;
  @Output() bid = new EventEmitter<void>();
  displayBidStep = true;
  form: FormGroup;
  submitted: boolean;
  submitSuccessAlert = false;
  submitErrorAlert = false;
  disabled = false;

  constructor(private fb: FormBuilder,
              private bidService: BidService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ticket'] != null
      && !changes['ticket'].isFirstChange()
      && changes['ticket'].currentValue != null) {
      this.disabled = false;
      this.form.reset({bid: null});
      this.form.get('bid').enable();
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        // bid: null;      alapeset
        // bid: [null, Validators.required]     ha egy validátorom van
        // és ha több   ---->>>>>
        bid: [
          null,
          Validators.compose(
            [
              Validators.required,
              bidMinimumValidator(() => {
                return this.ticket;
              })
            ]
          )
        ]
      }
    );
  }


  onBidWithStep() {
    this.toBid(this.ticket.currentBid + this.ticket.bidStep)
      .subscribe(
        () => {
          this.submitted = false;
          this.form.reset({bid: null});
          // notificaltion user
          this.submitSuccessAlert = true;
          this.bid.emit();
          this.form.get('bid').enable();
        },
        err => {
          this.submitErrorAlert = true;
          console.error(err);
        }
      );
  }

  displayBidWithStep($event: Event) {
    $event.preventDefault();
    this.displayBidStep = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.toBid(this.form.value['bid']).subscribe(
        () => {
          this.submitted = false;
          // notification user
          this.submitSuccessAlert = true;
          this.bid.emit();
        },
        err => {
          this.submitErrorAlert = true;
          console.error(err);
        }
      );
    }
    console.log('Licitáltak');
    console.log(this.form.value);
    console.log(this.form.valid);
  }

  toBid(value: number) {
    this.submitErrorAlert = false;
    this.submitSuccessAlert = false;
    this.form.get('bid').disable();
    this.disabled = true;
    return this.bidService.bid(this.ticket.id, value);
  }
}
