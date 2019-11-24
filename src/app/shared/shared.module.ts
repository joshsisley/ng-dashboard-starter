import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class SharedModule {}
