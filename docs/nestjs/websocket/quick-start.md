## 快速入门

首先安装依赖包
::: code-group
```bash [npm]
npm i --save @nestjs/websockets @nestjs/platform-socket.io
```

```bash [pnpm]
pnpm add @nestjs/websockets @nestjs/platform-socket.io
```

```bash [yarn]
yarn add @nestjs/websockets @nestjs/platform-socket.io
```
:::


根据官网的介绍，我们需要创建一个 `gateway` 的类，并且使用 装饰器 `WebSocketGateway`，初始化 `Socket`，假设我们要做个聊天，为以下示例：

```ts
import {
  MessageBody, 
  OnGatewayConnection, 
  OnGatewayDisconnect, 
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway(10432 ,{
  cors: {
    origin: '*',
  },
})
export class ChatSocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer()
  server: Server;


  afterInit(server: any): any {
    console.log(`afterInit`);
  }

  handleConnection(client: any, ...args): any {
    console.log(`handleConnection`);
  }

  handleDisconnect(client: any): any {
    console.log(`handleDisconnect`);
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log('findAll.events', data);
    return from([1, 2, 3]).pipe(map(item => ({event: 'events', data: item})));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    console.log('identity.identity', data);
    return data;
  }

}

```