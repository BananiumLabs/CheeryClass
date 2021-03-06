import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomRoutingModule } from './custom-routing.module';

@NgModule({
  imports: [ CustomRoutingModule, CommonModule, CalendarModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    CalendarComponent
  ]
})
export class CustomModule { }
