import { Module } from '@nestjs/common';
import { MessagesService } from './dbmsg.service';
import { MessagesController } from './dbmsg.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './dbmsg.entity';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
