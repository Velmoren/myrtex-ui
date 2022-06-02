import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myrtex-ui';

  selectedPeople = [{ id: 2, name: 'third option' }];

  people$: any[] = [
    { id: 0, name: 'first option' },
    { id: 1, name: 'second option' },
    { id: 2, name: 'third option' },
    { id: 3, name: 'fourth option' },
  ];

}
