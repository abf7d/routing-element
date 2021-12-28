import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CompLibComponent } from './comp-lib.component';
import { MyCompAComponent } from './components/my-comp-a/my-comp-a.component';
import { MyCompBComponent } from './components/my-comp-b/my-comp-b.component';


const routes: Routes = [
  { path: '',  component: MyCompAComponent, outlet: 'element' },
  { path: 'comp-a',  component: MyCompAComponent, outlet: 'element' },
  { path: 'comp-b',  component: MyCompBComponent, outlet: 'element' },
];

@NgModule({
  imports: [/*RouterModule.forRoot(routes) */ RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule] //RouterModule]
})
export class CompLibRoutingModule { }
