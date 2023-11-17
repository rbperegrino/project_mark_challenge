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
   this.checked() ? 'bg-gradient-to-b from-[#F7F1FF] from-60% to-white h-full'  : 'bg-[#F7F1FF] h-[85px]',
  ])

  check = () => this.checked.update(value => {
    return !value;
  })
}
