import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Subject} from 'rxjs';
import {socketEvent} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SocketEventsService {
  socketEventsSub: Subject<socketEvent> = new Subject<socketEvent>();
  constructor(private socket: Socket) {
    this.socket.fromEvent('game-state').subscribe((e: socketEvent) => {
      console.log('s::: ', e);
      this.socketEventsSub.next(e);
    });
  }
}
