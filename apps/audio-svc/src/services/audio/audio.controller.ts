import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AudioService } from './audio.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('audio')
export class AudioController {
    constructor(private readonly audioService: AudioService) {}

    @Post('upload-audio')
    @UseInterceptors(FileInterceptor('audio'))
    async uploadAudio(@UploadedFile() audio: Express.Multer.File) {
        return this.audioService.uploadAudio(audio);
    }

    @Get('get-audio/:name')
    async getAudio(@Param('name') name: string, @Res() res: Response) {
        return res.sendFile(name, { root: 'uploads' });
    }
}
