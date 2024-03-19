import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AudioSvcController } from './audio-svc.controller';
import { AudioSvcService } from './audio-svc.service';
import { WebsocketGatewayModule } from './websocket-gateway/websocket-gateway.module';

@Module({
  imports: [PrismaModule, WebsocketGatewayModule],
  controllers: [AudioSvcController],
  providers: [AudioSvcService],
})
export class AudioSvcModule {}
