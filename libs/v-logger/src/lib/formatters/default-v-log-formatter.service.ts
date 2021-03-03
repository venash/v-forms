import { VLogFormatterService } from './v-log-formatter-service';

export class DefaultVLogFormatterService implements VLogFormatterService {

  format(message: any): any[] {
    const now = new Date().toISOString();
    return [now, message];
  }

}
