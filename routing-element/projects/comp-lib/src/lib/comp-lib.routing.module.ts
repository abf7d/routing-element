import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompLibComponent } from './comp-lib.component';
import { MyCompAComponent } from './components/my-comp-a/my-comp-a.component';
import { MyCompBComponent } from './components/my-comp-b/my-comp-b.component';


const routes: Routes = [
  {
    path: 'elements',
    component: CompLibComponent,
    children: [
      {
        path: 'comp-a',
        component: MyCompAComponent,
        outlet: 'element'
      },
      {
        path: 'comp-b',
        component: MyCompBComponent,
        outlet: 'element'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CompLibRoutingModule { }
