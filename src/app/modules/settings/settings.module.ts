import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [SettingsRoutingModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [UserSettingsComponent],
  exports: [UserSettingsComponent]
})
export class SettingsModule { }