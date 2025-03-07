import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'testuser1',
      password: 'secret1',
      email: 'tu1@test.com',
      bio: 'This is a test user 1 bio.'
    },
    {
      username: 'testuser2',
      password: 'secret2',
      email: 'tu2@test.com',
      bio: 'This is a test user 2 bio.'
    },
    {
      username: 'testuser3',
      password: 'secret3',
      email: 'tu3@test.com',
      bio: 'This is a test user 3 bio.'
    },
  ];

  getUserByName(userName: string): User | undefined {
    return this.users.find((user: User) => user.username === userName);
  }
}
