import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'testuser1',
      password: 'secret1',
      email: 'tu1@test.com',
    },
    {
      username: 'testuser2',
      password: 'secret2',
      email: 'tu2@test.com',
    },
    {
      username: 'testuser3',
      password: 'secret3',
      email: 'tu3@test.com',
    },
  ];

  getUserByName(userName: string): User | undefined {
    return this.users.find((user: User) => user.username === userName);
  }
}
