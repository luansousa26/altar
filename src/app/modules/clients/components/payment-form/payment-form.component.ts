import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor(public service: ClientsService) { }

  ngOnInit(): void {
  }

}
