import { Field, InputType } from '@nestjs/graphql';
// class-validator
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  IsEnum,
} from 'class-validator';

// Enum to define the roles of the user
export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

@InputType()
export class CreateUserInput {
  @Field({ description: 'First name of the user' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field({ description: 'Last name of the user' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field(() => String, { description: 'Email address of the user' })
  @IsString()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Password of the user' })
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    },
    { message: 'Password is too weak' },
  )
  password: string;

  @Field(() => String, { description: 'Role of the user' })
  @IsString()
  @IsEnum(UserRole, {
    message: 'Invalid role, must be one of [ADMIN, MANAGER, USER]',
  })
  role: string;
}
