import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, NgZorroAntdModule, HomeRoutingModule]
})
export class HomeModule {}
