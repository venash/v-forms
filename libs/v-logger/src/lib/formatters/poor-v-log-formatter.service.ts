import { VLogFormatterService } from './v-log-formatter-service';

export class PoorVLogFormatterService implements VLogFormatterService {

  format(message: any): any[] {
    return [message];
  }

}
