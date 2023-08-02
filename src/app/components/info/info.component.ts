import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnChanges {
  @Input() data: any;
  isDataAvailable: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.isDataAvailable = !!this.data;
  }
}