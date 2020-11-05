import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome() {
    return {
      message: 'Welcome to the cosi challenge. Have fun :)',
    };
  }
}
