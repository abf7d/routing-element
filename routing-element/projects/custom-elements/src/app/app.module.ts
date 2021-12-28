import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompLibComponent, CompLibModule } from '@test/comp-lib';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompLibModule
  ],
  entryComponents: [CompLibComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const plotsExplorer = createCustomElement(CompLibComponent, {injector});
    customElements.get('my-custom-element') || customElements.define('my-custom-element', plotsExplorer);
  }
  ngDoBootstrap() {
    // do nothing
  }
 }
