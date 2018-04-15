import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Classes'
    },
    children: [
      {
        path: 'list',
        component: ColorsComponent,
        data: {
          title: 'Class List'
        }
      },
      {
        path: 'add',
        component: TypographyComponent,
        data: {
          title: 'Add Class'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
