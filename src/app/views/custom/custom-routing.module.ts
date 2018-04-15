import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Custom Pages'
        },
        children: [
            {
                path: 'calendar',
                component: CalendarComponent,
                data: {
                    title: 'Calendar Page'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomRoutingModule { }
