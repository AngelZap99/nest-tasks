import { CreateUserInput } from './create-user.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
