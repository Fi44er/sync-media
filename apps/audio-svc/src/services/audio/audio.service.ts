import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AudioService {
    constructor(private readonly prismaService: PrismaService) {}

    async uploadAudio(audio: Express.Multer.File) {
        return this.prismaService.audio.create({
            data: {
                name: audio.originalname,
                buffer: audio.buffer,
                roomId: 1
            },
        });
    }
}
