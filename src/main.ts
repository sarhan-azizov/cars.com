import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('basic.port') || 3000;

  await app.listen(port);

  console.info(`DXE clinical modules BE started on ${port} port.`);
}
bootstrap();
