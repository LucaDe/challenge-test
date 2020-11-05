import { Controller, Post } from '@nestjs/common';
import db from './db';
import sqs from './sqs';
import slack from './slack';

@Controller('apaleo')
export class ApaleoController {
  @Post('/reservation-webhook')
  async onNewReservation(data: any) {
    const isDuplicate = await db.getWebhook(data.id);
    if (!isDuplicate) {
      await db.saveWebhook(data.id);
      await slack.sendSlackNotification(data.reservation);
      await sqs.sendQueueMessage(
        data.reservation,
        'https://eu-central-1.aws.amazon.com/sqs',
      );
    }
    return {
      message: 'Processed',
    };
  }
}
