import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuList: any[] = [
    {
      label: 'Generator',
      route: 'generator',
      selected: false
    },
    {
      label: 'Payments',
      route: 'payments',
      selected: false
    }
  ];
  constructor(private router: Router) {

  }

  public navigate(item: any): void {
    this.menuList.map((item) => item.selected = false);
    item.selected = true;
    this.router.navigate([`clients/${item.route}`]);
  }
}
