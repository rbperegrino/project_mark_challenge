import {CommonModule} from '@angular/common';
import {Component, computed, Input, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {ColumnType} from "../../../domain/models/column-type.model";

@Component({
  selector: 'app-board-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ColumnComponent implements OnInit {
  @Input({required: true}) props!: ColumnType
  checked = signal(true)

  classes = computed( () =>[
   this.checked() ? `bg-gradient-to-b from-${this.props?.id}-100 via-${this.props?.id}-100 via-30% from-20% to-white h-full`  : `bg-${this.props?.id}-100 h-[75px]`,
  ])

  titleClasses: string[] = []
  boxClasses: string[] = []

  ngOnInit() {
    this.titleClasses = [`text-${this.props?.id}-400`]
    this.boxClasses = [`border-${this.props?.id}-200`]
  }

  check = () => this.checked.update(value => !value)
}
