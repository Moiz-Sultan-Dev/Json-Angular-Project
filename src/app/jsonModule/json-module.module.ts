import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDisplayComponent } from './json-display/json-display.component';

@NgModule({
  declarations: [JsonDisplayComponent],
  imports: [CommonModule],
  exports: [JsonDisplayComponent],
})
export class JsonModule {}
