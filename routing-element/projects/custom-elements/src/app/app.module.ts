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
    providers: [],
    entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const plotsExplorer = createCustomElement(AppComponent, {injector});
    customElements.get('my-test') || customElements.define('my-test', plotsExplorer);
  }
  ngDoBootstrap() {
    // do nothing
    const plotsExplorer = createCustomElement(AppComponent, {injector: this.injector});
    customElements.get('my-test') || customElements.define('my-test', plotsExplorer);
  }
 }
