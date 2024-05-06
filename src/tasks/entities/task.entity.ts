import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID, { description: 'Unique identifier of the task' })
  id: string;

  @Field({ description: 'Title of the task' })
  title: string;

  @Field({ description: 'Description of the task' })
  description: string;

  @Field({ description: 'Status of the task' })
  status: string; // 'OPEN' | 'IN_PROGRESS' | 'DONE'

  @Field(() => ID, {
    description: 'Level of permission required to access the task',
  })
  permission: string; // 'ADMIN' | 'MANAGER' | 'USER'

  // CONTROL FIELDS
  @Field({ description: 'Date the task was created' })
  createdAt: Date;

  @Field({ description: 'Date the task was last updated' })
  updatedAt: Date;
}
