import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  imports: [
    DashboardRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, CalendarModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
