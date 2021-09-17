import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';
import { BioFormComponent } from './components/bio-form/bio-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { BioListenerComponent } from './components/bio-listener/bio-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    BioFormComponent,
    ReactiveComponent,
    BioListenerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
