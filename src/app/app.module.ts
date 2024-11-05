import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalItemComponent } from './components/animal-item/animal-item.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalItemComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
      MatButtonModule
    ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
