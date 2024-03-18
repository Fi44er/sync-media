import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AudioService } from './audio.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('audio')
export class AudioController {
    constructor(private readonly audioService: AudioService) {}

    @Post('upload-audio')
    @UseInterceptors(FileInterceptor('audio'))
    async uploadAudio(@UploadedFile() audio: Express.Multer.File, @Res() res: Response) {
        // res.sendFile('1710780423652.AMU6iX-TakaBala.mp3', { root: 'uploads' });
        return this.audioService.uploadAudio(audio, res);
    }
}
