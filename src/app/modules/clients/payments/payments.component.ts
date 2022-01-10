import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(public service: ClientsService) { }

  ngOnInit(): void {
    if (!this.service.started) {
      this.service.start();
    }
  }

}
