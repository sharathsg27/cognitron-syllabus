import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatExpansionPanel, MatTooltip} from '@angular/material';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements AfterViewInit, AfterContentChecked {
  rangeValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  unitInit = 'Unit - ';
  units: any[] = [{
    unit_no: this.unitInit.concat('1'),
    unit_name: '',
    total_hours: 1,
    topics: '',
    slider_config: {
      min: 1,
      max: 10,
      step: 1,
      value: 1
    }
  }];
  panelHeight = '118px';

  @ViewChild('tooltip') tooltip: MatTooltip;


  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngAfterContentChecked() {
  }


  ngAfterViewInit() {
    this.tooltip.show();
    this.changeDetector.detectChanges();
  }

  // Expand Expansion Panel only when clicked on Accordion
  expandPanel(matExpansionPanel: MatExpansionPanel, event: Event): void {
    event.stopPropagation(); // Preventing event bubbling

    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.toggle(); // Here's the magic
    }
  }

  // Manage Units
  manageUnits(event: { value: string, actionType: string }) {
    let count = parseInt(event.value);
    if (event.actionType === 'plus') {
      for (let i = 1; i <= count; i++) {
        this.units.unshift({
          unit_no: this.unitInit + (this.units.length + 1),
          unit_name: '',
          total_hours: 1,
          topics: '',
          slider_config: {
            min: 1,
            max: 10,
            step: 1,
            value: 1
          }
        });
      }
    }
    if (event.actionType === 'minus') {
      this.units.splice(this.units.lastIndexOf(this.units), 1);
    }
  }

  // Set Unit time
  setUnitTime(unit) {
    if (unit.total_hours <= unit.slider_config.max) {
      unit.slider_config.value = unit.total_hours;
    }
  }

  // Set Slider value
  setSliderValue(slider, unit) {
    if (slider.value <= unit.slider_config.max) {
      unit.total_hours = slider.value;
    }
  }

  // Save Unit
  saveUnit(unit) {

  }

  // Remove Unit
  removeUnit(unit) {
    if (this.units.indexOf(unit) > -1) {
      this.units.splice(unit, 1);
    }
  }

  private _isExpansionIndicator(target: EventTarget): boolean {
    const expansionIndicatorClass = 'mat-expansion-indicator';
    // @ts-ignore
    return (target.classList && target.classList.contains(expansionIndicatorClass));
  }
}
