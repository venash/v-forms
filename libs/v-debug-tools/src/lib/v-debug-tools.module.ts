import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDebuggerComponent } from './form-group-debugger/form-group-debugger.component';
import { VLoggerModule } from '@venash-forms/v-logger';

@NgModule({
  imports: [CommonModule, VLoggerModule.forRoot({ enableDebug: true })],
  declarations: [FormGroupDebuggerComponent],
  exports: [FormGroupDebuggerComponent]
})
export class VDebugToolsModule {}
