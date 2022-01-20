// import { NoAuth } from '@decorators/no.auth.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  // @NoAuth()
  @Post('/sendCode')
  async sendEmailCode(@Body() data) {
    const { code } = await this.emailService.sendEmailCode(data);
    if (code && code === 200) {
      console.log('成功');
    }
  }
}
