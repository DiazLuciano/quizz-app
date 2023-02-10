import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-msg',
  templateUrl: './empty-msg.component.html',
  styleUrls: ['./empty-msg.component.css'],
})
export class EmptyMsgComponent {

  @Input() public title: string = '';
  @Input() public description?: string = '';

}
