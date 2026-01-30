import { Injectable } from '@nestjs/common';

import { HELLO_WORLD } from '@mr-cans/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return HELLO_WORLD;
  }
}
