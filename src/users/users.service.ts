import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDocument, User } from '@/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createOne(user) {
    try {
      const createdUser = new this.userModel(user);
      return await createdUser.save();
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'email is present',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findOne(email: string): Promise<User | undefined> {
    const user: UserDocument = await this.userModel
      .findOne({ email: email })
      .lean();
    return user;
  }
}
