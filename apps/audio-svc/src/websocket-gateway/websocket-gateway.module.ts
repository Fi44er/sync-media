import { Module } from '@nestjs/common';
import { Gateway } from './gateway';
import { AudioSvcController } from '../audio-svc.controller';
import { AudioSvcService } from '../audio-svc.service';

@Module({
    providers: [Gateway, AudioSvcController, AudioSvcService],
    // imports: [AudioSvcController],
    // providers: [Gateway]
})
export class WebsocketGatewayModule {}
