import { entities } from './../dbmsg/dbmsg.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'webxrj.top',
      port: 3306,
      username: 'bishe',
      password: '1web@XRJ',
      database: 'bishe',
      entities,
      synchronize: true,
    }),
  ],
})
export class MysqlModule {}
