import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public service: ClientsService) { }

  ngOnInit(): void {
  }

}
