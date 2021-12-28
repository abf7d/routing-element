import { NgModule } from '@angular/core';
import { CompLibComponent } from './comp-lib.component';
import { CompLibRoutingModule } from './comp-lib.routing.module';
import { MyCompAComponent } from './components/my-comp-a/my-comp-a.component';
import { MyCompBComponent } from './components/my-comp-b/my-comp-b.component';



@NgModule({
  declarations: [CompLibComponent, MyCompAComponent, MyCompBComponent],
  imports: [
    CompLibRoutingModule
  ],
  exports: [CompLibComponent]
})
export class CompLibModule { }
