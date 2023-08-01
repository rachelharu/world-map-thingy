import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnChanges {
  @Input() countryData: any;
  isDataAvailable: boolean = false;


  ngOnChanges(changes: SimpleChanges) {
    // if (changes['countryData']) {
    //   this.isDataAvailable = !!this.countryData;
    //   this.changeDetectorRef.detectChanges();
    // }
    this.isDataAvailable = !!this.countryData;
  }
}
