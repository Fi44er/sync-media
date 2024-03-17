import { Module } from '@nestjs/common';
import { PrismaModule } from './services/prisma/prisma.module';
import { AudioModule } from './services/audio/audio.module';


@Module({
  imports: [AudioModule],
  controllers: [],
  providers: [],
})
export class AudioSvcModule {}
