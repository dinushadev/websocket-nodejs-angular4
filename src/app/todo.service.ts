import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const SERVER_URL = 'ws://localhost:3005';

@Injectable()
export class TodoService {
  public messages: Subject<any> = new Subject<any>();

  constructor(private websocket: WebsocketService) {
    this.messages = <Subject<string>>this.websocket
      .connect(SERVER_URL)
      .map((response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        console.log('message data' + data);
        return data;
      });


  }

}
