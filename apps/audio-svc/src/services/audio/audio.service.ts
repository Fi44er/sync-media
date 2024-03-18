import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { join } from 'path';
import { writeFile } from 'fs';
import { Response } from 'express';

@Injectable()
export class AudioService {
    constructor(private readonly prismaService: PrismaService) {}

    async uploadAudio(audio: Express.Multer.File, res: Response) {
        const uploadFolder = join(__dirname, '../../../uploads')

        if (!audio.originalname.match(/\.(mp3|wav)$/)) {
            return new BadRequestException('Формат файла не поддерживается')
        }
        const newname = `${Date.now()}.${audio.originalname.replace(/\s/g, '')}`
        await new Promise<void>((resolve, reject) => {
            writeFile(join(uploadFolder, newname), audio.buffer, (error) => {
                if(error) {
                    reject(new InternalServerErrorException('Ошибка при записи аудио'));
                } else {
                    resolve();
                }
            })
        })
        this.prismaService.audio.create({
            data: {
                name: newname,
                roomId: 1
            },
        });
        
        return res.sendFile(newname, { root: 'uploads' });
    }
}
