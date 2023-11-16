import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  steps = [
    {
      step: 1,
      title: 'Sales Pipeline Settings',
      active: true
    },
    {
      step: 2,
      title: 'Opportunity Details Settings',
      active: false
    }
  ]
}
