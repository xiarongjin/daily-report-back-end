import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @Get('serve')
  getServe(): string {
    return 'serve';
  }
}
@Controller('register')
export class register {
  constructor(private readonly appService: AppService) {}

  @Post('/code')
  sendEmailCode(@Body() data) {
    const registerCode = '123';
    console.log(data);
    if (data.code === registerCode) return { code: 1, msg: 'hit' };
    return { code: 0, msg: 'fail', data };
  }
}
