import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PalletteComponent } from './pallette/pallette.component';
import { ActualListComponent } from './actual-list/actual-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    PalletteComponent,
    ActualListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
