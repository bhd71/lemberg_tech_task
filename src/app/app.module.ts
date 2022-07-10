import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from "./header/components/logo/logo.component";
import {navigationComponent} from "./header/components/navigation/navigation.component";
import {HelmetComponent} from './header/components/helmet/helmet.component';
import {DescriptionComponent} from './header/components/description/description.component';
import {MainComponent} from './main/main.component';
import {HeadingComponent} from './main/components/heading/heading.component';
import {FormComponent} from './main/components/form/form.component';
import {FormsModule} from "@angular/forms";
import {DropdownComponent} from './header/components/dropdown/dropdown.component';
import {DropdownNavigationComponent} from './header/components/dropdown-navigation/dropdown-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    navigationComponent,
    HelmetComponent,
    DescriptionComponent,
    MainComponent,
    HeadingComponent,
    FormComponent,
    DropdownComponent,
    DropdownNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
