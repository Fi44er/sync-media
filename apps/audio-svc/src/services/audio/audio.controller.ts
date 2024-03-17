import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AudioService } from './audio.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('audio')
export class AudioController {
    constructor(private readonly audioService: AudioService) {}

    @Post('upload-audio')
    @UseInterceptors(FileInterceptor('audio'))
    async uploadAudio(@UploadedFile() audio: Express.Multer.File) {
        return this.audioService.uploadAudio(audio);
    }
}
