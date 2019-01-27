import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss']
})
export class CourseHeaderComponent implements OnInit {
  @Output() unitValue = new EventEmitter<{ value: string, actionType: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  //  Manage (Add / Remove) Units
  manageUnits(value: { value: string, actionType: string }) {
    this.unitValue.emit(value);
  }

}
