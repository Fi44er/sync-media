import { MessageBody, OnGatewayConnection,  OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { AudioSvcService } from "../audio-svc.service";
import { Response } from 'express';
import { Res } from "@nestjs/common";


@WebSocketGateway()
export class Gateway implements OnGatewayInit, OnGatewayConnection{
    constructor (private readonly audioSvcService: AudioSvcService) {}
    @WebSocketServer() server: Server
    
    afterInit(server: any) {
        console.log('Server started');
    }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('getAudio')
    async onGetAudio(@MessageBody() name: string, @Res() res: Response) {
        
    }
}