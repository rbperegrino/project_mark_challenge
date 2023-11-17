import {CommonModule} from '@angular/common';
import {Component, computed, signal, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-board-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ColumnComponent {
  checked = signal(true)
  classes = computed( () =>[
   this.checked() ? 'bg-gradient-to-b from-lead-100 from-60% to-white h-full'  : 'bg-lead-100 h-[85px]',
  ])
  titleClasses = ['text-lead-400']
  boxClasses = ['border-lead-200']
  title = 'Lead'


  check = () => this.checked.update(value => {
    return !value;
  })
}
