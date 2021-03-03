import { VLogFormatterService } from '../formatters/v-log-formatter-service';

export type LogFormatterServiceType = new () => VLogFormatterService;

export abstract class VLoggerConfig {
  enableDebug: boolean;
  logFormatterType?: LogFormatterServiceType;
}
