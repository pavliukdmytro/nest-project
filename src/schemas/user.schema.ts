import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
enum roles {
  'user',
  'admin',
}

@Schema()
export class User {
  @Prop({ required: true, unique: true, match: /.+\@.+\..+/ })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true, default: 'user' })
  role: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
