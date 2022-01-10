import { Component, Input } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-your-code',
  templateUrl: './your-code.component.html',
  styleUrls: ['./your-code.component.scss']
})
export class YourCodeComponent {

  @Input()
  label = 'YOUR CODE:';

  constructor(public service: ClientsService) { }
}
