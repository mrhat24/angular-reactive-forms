import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormSimpleExampleComponent } from './pages/reactive-form-simple-example/reactive-form-simple-example.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './components/nav/nav.component';
import { BaseSectionComponent } from './components/base-section/base-section.component';
import { CustomCountryPickerComponent } from './components/custom-country-picker/custom-country-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormSimpleExampleComponent,
    IndexComponent,
    NavComponent,
    BaseSectionComponent,
    CustomCountryPickerComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
