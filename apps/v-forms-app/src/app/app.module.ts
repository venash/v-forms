import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VFormsModule } from '@venash-forms/v-forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ScreenBasicFormComponent } from './screens/screen-basic-form/screen-basic-form.component';
import { AppRoutingModule } from './app-routing.module';
import {
  PoorVLogFormatterService,
  VLoggerModule
} from '@venash-forms/v-logger';
import { VDebugToolsModule } from '@venash-forms/v-debug-tools';
import { ScreenDisabledControlsComponent } from './screens/screen-disabled-controls/screen-disabled-controls.component';
import { ScreenTestingValidatorsComponent } from './screens/screen-testing-validators/screen-testing-validators.component';
import { ScreenTestingValidatorsWithArgumentsComponent } from './screens/screen-testing-validators-with-arguments/screen-testing-validators-with-arguments.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ScreenBasicFormComponent,
    ScreenDisabledControlsComponent,
    ScreenTestingValidatorsComponent,
    ScreenTestingValidatorsWithArgumentsComponent
  ],
  imports: [
    BrowserModule,
    VFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenuModule,
    AppRoutingModule,
    VLoggerModule.forRoot({
      enableDebug: true,
      logFormatterType: PoorVLogFormatterService
    }),
    VDebugToolsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
