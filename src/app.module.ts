import { Module } from '@nestjs/common';
import { AppController, register } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './dbmsg/dbmsg.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'webxrj.top',
      port: 3306,
      username: 'bishe',
      password: '1web@XRJ',
      database: 'bishe',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MessagesModule,
  ],
  controllers: [AppController, register],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
