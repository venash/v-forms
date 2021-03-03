import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VLoggerConfig } from './services/v-logger-config';
import { DefaultVLogFormatterService } from './formatters/default-v-log-formatter.service';
import { VLogFormatterService } from './formatters/v-log-formatter-service';

const defaultLogFormatterProvider: Provider = {
  provide: VLogFormatterService,
  useClass: DefaultVLogFormatterService
};

@NgModule({
  imports: [CommonModule]
})
export class VLoggerModule {
  static forRoot(config: VLoggerConfig): ModuleWithProviders<VLoggerModule> {
    return {
      ngModule: VLoggerModule,
      providers: [
        {
          provide: VLoggerConfig,
          useValue: config
        },
        !config.logFormatterType
          ? defaultLogFormatterProvider
          : [
              {
                provide: VLogFormatterService,
                useClass: config.logFormatterType
              }
            ]
      ]
    };
  }
}
