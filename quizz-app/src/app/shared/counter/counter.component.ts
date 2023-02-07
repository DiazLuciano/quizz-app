import { Component, Input } from '@angular/core';
import { SIZE, SizeType } from './constants/size.const';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  /**
   * Properties.
   */
  @Input() public size!: SizeType;

  @Input() public seconds!: number;

  constructor() { }

}
