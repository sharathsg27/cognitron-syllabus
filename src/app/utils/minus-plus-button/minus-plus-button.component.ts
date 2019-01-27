import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-minus-plus-button',
  templateUrl: './minus-plus-button.component.html',
  styleUrls: ['./minus-plus-button.component.scss']
})
export class MinusPlusButtonComponent implements OnInit {
  @Input() minusBorderRadius: string;
  @Input() plusBorderRadius: string;
  @Output() inputValue = new EventEmitter<{ value: string, actionType: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  sendValues(value: string, actionType: string) {
    console.log({value, actionType});
    this.inputValue.emit({value, actionType});
  }
}
