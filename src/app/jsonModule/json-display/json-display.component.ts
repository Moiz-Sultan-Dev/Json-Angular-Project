import { Component } from '@angular/core';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-json-display',
  templateUrl: './json-display.component.html',
  styleUrls: ['./json-display.component.css'],
})
export class JsonDisplayComponent {
  modifiedJsonData: any[] = [];
  deepModifiedJsonData: any[] = [];

  constructor(private jsonDataService: JsonDataService) {}

  fetchAndModifyData() {
    this.modifiedJsonData = this.jsonDataService.getModifiedData();
  }

  fetchAndModifyPayload() {
    this.deepModifiedJsonData = this.jsonDataService.getPayloadModified();
  }
}
