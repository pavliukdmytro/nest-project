import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;
enum roles {
  'user',
  'admin',
}

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  password: string;
  @Prop()
  role: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
