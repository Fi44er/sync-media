import { NestFactory } from '@nestjs/core';
import { AudioSvcModule } from './audio-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(AudioSvcModule);
  app.enableCors({origin: '*'})
  await app.listen(3000);
}
bootstrap();
