import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AudioSvcService } from './audio-svc.service';


@Controller('audio-svc')
export class AudioSvcController {
    constructor(private readonly audioSvcService: AudioSvcService) {}

    @Post('upload-audio')
    @UseInterceptors(FileInterceptor('audio'))
    async uploadAudio(@UploadedFile() audio: Express.Multer.File) {
        return this.audioSvcService.uploadAudio(audio);
    }

    @Get('get-audio/:name')
    async getAudio(@Param('name') name: string, @Res() res: Response) {
        return res.sendFile(name, { root: 'uploads' });
    }
}
