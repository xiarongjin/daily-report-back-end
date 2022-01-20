import { Injectable } from '@nestjs/common';
// import { Message } from './interfaces/message.interface';
// ORM
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './dbmsg.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private readonly user: User[] = [];

  async insertUser(data) {
    const user = new User();
    return await this.userRepository.insert(user);
  }
  async findUser(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
