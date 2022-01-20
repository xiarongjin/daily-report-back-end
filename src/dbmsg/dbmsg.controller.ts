import { Controller, Post } from '@nestjs/common';
import { MessagesService } from './dbmsg.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  insertUser() {
    const data = {
      userId: 2,
    };
    return this.messagesService.insertUser(data);
  }
}
