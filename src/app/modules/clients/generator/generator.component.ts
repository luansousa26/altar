import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  label = 'Character';

  constructor(public service: ClientsService) {

  }

}
