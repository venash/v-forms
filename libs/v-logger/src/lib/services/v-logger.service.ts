import { Injectable, Optional } from '@angular/core';
import { VLoggerConfig } from './v-logger-config';
import { VLogFormatterService } from '../formatters/v-log-formatter-service';

@Injectable({
  providedIn: 'root'
})
export class VLoggerService {
  constructor(
    @Optional() private config: VLoggerConfig,
    private logFormatter: VLogFormatterService
  ) {}

  log(message: any, name?: string): void {
    const logObjects = [...this.logFormatter.format(message), ...(name ? [name] : []),];
    console.log(...logObjects);
  }

  debug(message: any, name?: string): void {
    if (this.config.enableDebug) {
      const logObjects = [...this.logFormatter.format(message), ...(name ? [name] : [])];
      console.log(...logObjects);
    }
  }
}
