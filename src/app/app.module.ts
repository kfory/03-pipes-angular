import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';

//para pasarlo en español
 import  localeEs  from '@angular/common/locales/es';
registerLocaleData(localeEs); 

import  localeFr  from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { TareaPipe } from './pipes/tarea.pipe';
//para pasarlo en Frances
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    TareaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
