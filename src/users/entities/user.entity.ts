import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'Unique identifier of the user' })
  id: string;

  @Field({ description: 'First name of the user' })
  firstName: string;

  @Field({ description: 'Last name of the user' })
  lastName: string;

  @Field(() => String, { description: 'Email address of the user' })
  email: string;

  @Field(() => String, { description: 'Password of the user' })
  password: string;

  @Field(() => String, { description: 'Role of the user' })
  role: string; // 'ADMIN' | 'MANAGER' | 'USER'

  @Field(() => Boolean, {
    description: 'Flag to indicate if the user is active',
  })
  status: boolean;

  // CONTROL FIELDS
  @Field({ description: 'Date the user was created' })
  createdAt: Date;

  @Field({ description: 'Date the user was last updated', nullable: true })
  updatedAt: Date;
}
