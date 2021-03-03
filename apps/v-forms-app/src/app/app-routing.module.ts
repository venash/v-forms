import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenBasicFormComponent } from './screens/screen-basic-form/screen-basic-form.component';
import { ScreenDisabledControlsComponent } from './screens/screen-disabled-controls/screen-disabled-controls.component';
import {ScreenTestingValidatorsComponent} from './screens/screen-testing-validators/screen-testing-validators.component';
import {ScreenTestingValidatorsWithArgumentsComponent} from "./screens/screen-testing-validators-with-arguments/screen-testing-validators-with-arguments.component";

const routes: Routes = [
  {
    path: '',
    component: ScreenBasicFormComponent
  },
  {
    path: 'screen-disabled-controls',
    component: ScreenDisabledControlsComponent
  },
  {
    path: 'screen-testing-validators',
    component: ScreenTestingValidatorsComponent
  },
  {
    path: 'screen-testing-validators-with-arguments',
    component: ScreenTestingValidatorsWithArgumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
