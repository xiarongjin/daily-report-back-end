import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
const path = require('path');
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.126.com', //邮箱服务器地址
        port: 25, //服务器端口 默认 465
        auth: {
          user: 'daily_report2022@126.com', //你的邮箱地址
          pass: 'XHYHDOZOZRGRGCUF',
        },
      },
      preview: false, //是否开启预览，开启了这个属性，在调试模式下会自动打开一个网页，预览邮件
      // defaults: {
      //   from: '"邮箱验证" <daily_report2022@126.com>', //发送人 你的邮箱地址
      // },
      template: {
        dir: path.join(process.cwd(), './src/email/template'), //这里就是你的ejs模板文件夹路径
        adapter: new PugAdapter(),
        options: {
          strict: true, //严格模式
        },
      },
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
