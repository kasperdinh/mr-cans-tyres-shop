import { Injectable } from '@nestjs/common';

import { HELLO_WORLD } from '@canstyres/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return HELLO_WORLD;
  }
}
