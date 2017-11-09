import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ColumnComponent } from './column/column.component';
import { DiceComponent } from './dice/dice.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'basic',
  pathMatch: 'full'
},
{
  path: 'basic',
  component: BasicComponent
},
{
  path: 'column',
  component: ColumnComponent
},
{
  path: 'dice',
  component: DiceComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
