import { Injectable } from '@nestjs/common';
import { UsersService } from '@/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserDocument } from '@/schemas/user.schema';

// import { use } from 'passport';

@Injectable()
export class AuthService {
  saltOrRounds = 10;
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const isMatch = await bcrypt.compare(password, user.password);
    delete user.password;

    if (isMatch) {
      return user;
    }
    return null;
  }

  async registration(userData) {
    const user = { ...userData };
    user.password = await bcrypt.hash(user.password, this.saltOrRounds);
    return await this.usersService.createOne(user);
  }
}
